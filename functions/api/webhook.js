// functions/api/webhook.js
// Cloudflare Pages Function — Stripe Webhook Handler
// Alle 5 businesslijnen Bierinckx Revenue Agency

export async function onRequestPost(context) {
  const { request, env } = context;

  const sig = request.headers.get('stripe-signature');
  const body = await request.text();

  // Stripe webhook signature verificatie
  let event;
  try {
    // Cloudflare Workers crypto voor HMAC verificatie
    const verified = await verifyStripeSignature(body, sig, env.STRIPE_WEBHOOK_SECRET);
    if (!verified) {
      return new Response(JSON.stringify({ error: 'Invalid signature' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }
    event = JSON.parse(body);
  } catch (err) {
    return new Response(JSON.stringify({ error: `Webhook Error: ${err.message}` }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' }
    });
  }

  // Route per businesslijn op basis van metadata
  switch (event.type) {
    case 'checkout.session.completed': {
      const session = event.data.object;
      const bl = session.metadata?.business_line;

      console.log(`[WEBHOOK] Betaling bevestigd — BL: ${bl} — ${session.customer_email}`);

      if (bl === 'BL1_CRO') {
        // HubSpot deal → fase Onboarding
        await notifyTeam(env, 'BL1_CRO', session);
      } else if (bl === 'BL3_PSY') {
        // Calendly sessie vrijgeven
        await notifyTeam(env, 'BL3_PSY', session);
      } else if (bl === 'BL4_CONSULTANCY') {
        // Consultancy traject starten
        await notifyTeam(env, 'BL4_CONSULTANCY', session);
      } else if (bl === 'BL5_AURA_LUXE') {
        // Fulfillment partner notificeren
        await notifyTeam(env, 'BL5_AURA_LUXE', session);
      }
      break;
    }
    case 'payment_intent.payment_failed': {
      const pi = event.data.object;
      console.error(`[WEBHOOK] Betaling mislukt: ${pi.id}`);
      // Dunning automatisering triggeren
      break;
    }
    default:
      console.log(`[WEBHOOK] Onverwerkt event: ${event.type}`);
  }

  return new Response(JSON.stringify({ received: true }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' }
  });
}

// Stripe HMAC signature verificatie via Web Crypto API
async function verifyStripeSignature(payload, sigHeader, secret) {
  if (!sigHeader || !secret) return false;
  const parts = sigHeader.split(',');
  const ts = parts.find(p => p.startsWith('t='))?.split('=')[1];
  const v1 = parts.find(p => p.startsWith('v1='))?.split('=')[1];
  if (!ts || !v1) return false;

  const signed = `${ts}.${payload}`;
  const key = await crypto.subtle.importKey(
    'raw',
    new TextEncoder().encode(secret),
    { name: 'HMAC', hash: 'SHA-256' },
    false,
    ['sign']
  );
  const sig = await crypto.subtle.sign('HMAC', key, new TextEncoder().encode(signed));
  const computed = Array.from(new Uint8Array(sig)).map(b => b.toString(16).padStart(2, '0')).join('');
  return computed === v1;
}

async function notifyTeam(env, businessLine, session) {
  console.log(`[NOTIFY] ${businessLine} — ${session.customer_email} — ${session.amount_total / 100} EUR`);
  // TODO: webhook naar HubSpot / Calendly / Zapier per BL
}
