// functions/api/create-checkout.js
// Cloudflare Pages Function — Stripe Checkout
// Bierinckx Revenue Agency — Alle businesslijnen

export async function onRequestPost(context) {
  const { request, env } = context;

  // CORS
  const corsHeaders = {
    'Access-Control-Allow-Origin': 'https://bierinckx.com',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Content-Type': 'application/json'
  };

  let body;
  try {
    body = await request.json();
  } catch {
    return new Response(JSON.stringify({ error: 'Invalid JSON' }), { status: 400, headers: corsHeaders });
  }

  const { business_line, product_name, amount_eur, customer_email, locale = 'nl' } = body;

  if (!business_line || !product_name || !amount_eur) {
    return new Response(JSON.stringify({ error: 'Ontbrekende velden: business_line, product_name, amount_eur' }), {
      status: 400,
      headers: corsHeaders
    });
  }

  // Minimumprijs AURA LUXE
  if (business_line === 'BL5_AURA_LUXE' && amount_eur < 15) {
    return new Response(JSON.stringify({ error: 'Minimumprijs AURA LUXE is €15' }), {
      status: 400,
      headers: corsHeaders
    });
  }

  try {
    // Stripe API call via fetch (geen npm in Cloudflare Functions)
    const stripeResponse = await fetch('https://api.stripe.com/v1/checkout/sessions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${env.STRIPE_SECRET_KEY}`,
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: new URLSearchParams({
        'payment_method_types[]': 'card',
        'payment_method_types[]': 'ideal',
        'payment_method_types[]': 'bancontact',
        'line_items[0][price_data][currency]': 'eur',
        'line_items[0][price_data][product_data][name]': product_name,
        'line_items[0][price_data][unit_amount]': String(Math.round(amount_eur * 100)),
        'line_items[0][quantity]': '1',
        'mode': 'payment',
        'customer_email': customer_email || '',
        'locale': locale,
        'automatic_tax[enabled]': 'true',
        'metadata[business_line]': business_line,
        'success_url': 'https://bierinckx.com/bedankt?session={CHECKOUT_SESSION_ID}',
        'cancel_url': 'https://bierinckx.com/shop'
      })
    });

    const session = await stripeResponse.json();

    if (!stripeResponse.ok) {
      throw new Error(session.error?.message || 'Stripe fout');
    }

    return new Response(JSON.stringify({ url: session.url, session_id: session.id }), {
      status: 200,
      headers: corsHeaders
    });

  } catch (err) {
    console.error('[CHECKOUT] Fout:', err.message);
    return new Response(JSON.stringify({ error: err.message }), {
      status: 500,
      headers: corsHeaders
    });
  }
}

export async function onRequestOptions() {
  return new Response(null, {
    status: 204,
    headers: {
      'Access-Control-Allow-Origin': 'https://bierinckx.com',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type'
    }
  });
}
