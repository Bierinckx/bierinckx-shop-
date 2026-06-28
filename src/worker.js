// bierinckx-shop Worker
// Bedient statische HTML + Stripe API endpoints
// Bierinckx Revenue Agency

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    const path = url.pathname;

    const corsHeaders = {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    };

    if (request.method === 'OPTIONS') {
      return new Response(null, { status: 204, headers: corsHeaders });
    }

    if (path === '/api/webhook' && request.method === 'POST') {
      return handleWebhook(request, env, corsHeaders);
    }

    if (path === '/api/create-checkout' && request.method === 'POST') {
      return handleCheckout(request, env, corsHeaders);
    }

    if (path === '/' || path === '') {
      return new Response(getIndexHTML(), {
        headers: { 'Content-Type': 'text/html;charset=UTF-8' }
      });
    }

    if (path === '/shop' || path === '/shop/') {
      return new Response(getShopHTML(), {
        headers: { 'Content-Type': 'text/html;charset=UTF-8' }
      });
    }

    if (path === '/bedankt') {
      return new Response(getBedanktHTML(), {
        headers: { 'Content-Type': 'text/html;charset=UTF-8' }
      });
    }

    return new Response(get404HTML(), {
      status: 404,
      headers: { 'Content-Type': 'text/html;charset=UTF-8' }
    });
  }
};

async function handleWebhook(request, env, corsHeaders) {
  const sig = request.headers.get('stripe-signature');
  const body = await request.text();
  try {
    const verified = await verifyStripeSignature(body, sig, env.STRIPE_WEBHOOK_SECRET);
    if (!verified) return new Response(JSON.stringify({ error: 'Invalid signature' }), { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } });
    const event = JSON.parse(body);
    if (event.type === 'checkout.session.completed') {
      const session = event.data.object;
      console.log(`[WEBHOOK] BL: ${session.metadata?.business_line} — ${session.customer_email}`);
    }
    return new Response(JSON.stringify({ received: true }), { status: 200, headers: { ...corsHeaders, 'Content-Type': 'application/json' } });
  } catch (err) {
    return new Response(JSON.stringify({ error: err.message }), { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } });
  }
}

async function handleCheckout(request, env, corsHeaders) {
  let body;
  try { body = await request.json(); } catch { return new Response(JSON.stringify({ error: 'Invalid JSON' }), { status: 400, headers: corsHeaders }); }
  const { business_line, product_name, amount_eur, customer_email, locale = 'nl' } = body;
  if (!business_line || !product_name || !amount_eur) return new Response(JSON.stringify({ error: 'Ontbrekende velden' }), { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } });
  try {
    const params = new URLSearchParams({
      'payment_method_types[]': 'card',
      'line_items[0][price_data][currency]': 'eur',
      'line_items[0][price_data][product_data][name]': product_name,
      'line_items[0][price_data][unit_amount]': String(Math.round(amount_eur * 100)),
      'line_items[0][quantity]': '1',
      'mode': 'payment',
      'locale': locale,
      'automatic_tax[enabled]': 'true',
      'metadata[business_line]': business_line,
      'success_url': 'https://bierinckx.com/bedankt?session={CHECKOUT_SESSION_ID}',
      'cancel_url': 'https://bierinckx.com/shop',
    });
    if (customer_email) params.set('customer_email', customer_email);
    const resp = await fetch('https://api.stripe.com/v1/checkout/sessions', {
      method: 'POST',
      headers: { 'Authorization': `Bearer ${env.STRIPE_SECRET_KEY}`, 'Content-Type': 'application/x-www-form-urlencoded' },
      body: params
    });
    const session = await resp.json();
    if (!resp.ok) throw new Error(session.error?.message || 'Stripe fout');
    return new Response(JSON.stringify({ url: session.url, session_id: session.id }), { status: 200, headers: { ...corsHeaders, 'Content-Type': 'application/json' } });
  } catch (err) {
    return new Response(JSON.stringify({ error: err.message }), { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } });
  }
}

async function verifyStripeSignature(payload, sigHeader, secret) {
  if (!sigHeader || !secret) return false;
  const parts = sigHeader.split(',');
  const ts = parts.find(p => p.startsWith('t='))?.split('=')[1];
  const v1 = parts.find(p => p.startsWith('v1='))?.split('=')[1];
  if (!ts || !v1) return false;
  const signed = `${ts}.${payload}`;
  const key = await crypto.subtle.importKey('raw', new TextEncoder().encode(secret), { name: 'HMAC', hash: 'SHA-256' }, false, ['sign']);
  const sig = await crypto.subtle.sign('HMAC', key, new TextEncoder().encode(signed));
  const computed = Array.from(new Uint8Array(sig)).map(b => b.toString(16).padStart(2,'0')).join('');
  return computed === v1;
}

function getIndexHTML() {
  return `<!DOCTYPE html><html lang="nl"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>AURA LUXE | Bierinckx</title><style>*{margin:0;padding:0;box-sizing:border-box}body{font-family:system-ui,sans-serif;background:#FAF9F6;color:#1a1a1a;min-height:100vh}header{background:#FAF9F6;border-bottom:1px solid #e8e0d0;padding:1.5rem 2rem;display:flex;justify-content:space-between;align-items:center}.logo{font-size:1.5rem;font-weight:700;letter-spacing:.15em;color:#1a1a1a;text-decoration:none}.logo span{color:#8B1A2B}nav a{margin-left:2rem;text-decoration:none;color:#555;font-size:.9rem;text-transform:uppercase}.hero{text-align:center;padding:6rem 2rem;max-width:700px;margin:0 auto}.hero h1{font-size:clamp(2rem,5vw,3.5rem);font-weight:300;letter-spacing:.1em;line-height:1.2;margin-bottom:1.5rem}.hero h1 strong{font-weight:700;color:#8B1A2B}.hero p{font-size:1.1rem;color:#666;line-height:1.7;margin-bottom:2.5rem}.cta-group{display:flex;gap:1rem;justify-content:center;flex-wrap:wrap}.btn{padding:.85rem 2.5rem;font-size:.9rem;letter-spacing:.1em;text-transform:uppercase;text-decoration:none;border-radius:2px}.btn-primary{background:#1a1a1a;color:#FAF9F6}.btn-secondary{border:1px solid #1a1a1a;color:#1a1a1a}.services{background:#fff;padding:4rem 2rem;text-align:center}.services h2{font-size:1.1rem;letter-spacing:.2em;text-transform:uppercase;color:#8B1A2B;margin-bottom:3rem}.grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:2rem;max-width:900px;margin:0 auto}.card{padding:2rem 1rem;border:1px solid #e8e0d0}.card h3{font-size:.85rem;letter-spacing:.15em;text-transform:uppercase;margin-bottom:.75rem}.card p{font-size:.9rem;color:#777;line-height:1.6}footer{text-align:center;padding:2rem;font-size:.8rem;color:#aaa;border-top:1px solid #e8e0d0}</style></head><body><header><a class="logo" href="/">AURA <span>LUXE</span></a><nav><a href="/shop">Shop</a><a href="mailto:info@bierinckx.com">Contact</a></nav></header><section class="hero"><h1>Premium <strong>Luxury Lifestyle</strong><br>voor de moderne vrouw</h1><p>Ontdek een zorgvuldig gecureerde selectie van premium beauty, parfum en mode.</p><div class="cta-group"><a href="/shop" class="btn btn-primary">Ontdek de collectie</a><a href="mailto:info@bierinckx.com" class="btn btn-secondary">Contact</a></div></section><section class="services" id="diensten"><h2>Bierinckx Revenue Agency</h2><div class="grid"><div class="card"><h3>Fractional CRO</h3><p>Chief Revenue Officer voor AI/SaaS scale-ups.</p></div><div class="card"><h3>Psychologie</h3><p>Online begeleiding. Boek via info@bierinckx.com.</p></div><div class="card"><h3>Consultancy</h3><p>Procesoptimalisatie voor KMO's in Benelux.</p></div><div class="card"><h3>AURA LUXE</h3><p>Premium lifestyle webshop.</p></div></div></section><footer>&copy; 2026 Bierinckx Revenue Agency &mdash; <a href="mailto:info@bierinckx.com" style="color:#8B1A2B">info@bierinckx.com</a></footer></body></html>`;
}

function getShopHTML() {
  return `<!DOCTYPE html><html lang="nl"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>Shop | AURA LUXE</title><style>*{margin:0;padding:0;box-sizing:border-box}body{font-family:system-ui,sans-serif;background:#FAF9F6;color:#1a1a1a}header{background:#FAF9F6;border-bottom:1px solid #e8e0d0;padding:1.5rem 2rem}.logo{font-size:1.5rem;font-weight:700;letter-spacing:.15em;color:#1a1a1a;text-decoration:none}.logo span{color:#8B1A2B}.hero{text-align:center;padding:8rem 2rem}h1{font-size:2rem;font-weight:300;letter-spacing:.1em;margin-bottom:1rem}p{color:#777;margin-bottom:2rem}.badge{display:inline-block;background:#8B1A2B;color:#FAF9F6;padding:.5rem 1.5rem;font-size:.75rem;letter-spacing:.2em;text-transform:uppercase}footer{text-align:center;padding:2rem;font-size:.8rem;color:#aaa;border-top:1px solid #e8e0d0;margin-top:4rem}</style></head><body><header><a class="logo" href="/">AURA <span>LUXE</span></a></header><section class="hero"><h1>Collectie in opbouw</h1><p>Onze premium collectie wordt binnenkort gelanceerd.</p><span class="badge">Coming Soon</span></section><footer>&copy; 2026 Bierinckx Revenue Agency</footer></body></html>`;
}

function getBedanktHTML() {
  return `<!DOCTYPE html><html lang="nl"><head><meta charset="UTF-8"><title>Bedankt | AURA LUXE</title><style>*{margin:0;padding:0;box-sizing:border-box}body{font-family:system-ui,sans-serif;background:#FAF9F6;display:flex;align-items:center;justify-content:center;min-height:100vh;text-align:center}h1{font-size:2rem;font-weight:300;margin-bottom:1rem}p{color:#777;margin-bottom:2rem}a{color:#8B1A2B}</style></head><body><div><h1>Bedankt voor uw betaling!</h1><p>Uw bestelling is bevestigd.<br><a href="mailto:info@bierinckx.com">info@bierinckx.com</a></p><a href="/">&larr; Terug naar home</a></div></body></html>`;
}

function get404HTML() {
  return `<!DOCTYPE html><html lang="nl"><head><meta charset="UTF-8"><title>404 | AURA LUXE</title><style>body{font-family:system-ui,sans-serif;background:#FAF9F6;display:flex;align-items:center;justify-content:center;min-height:100vh;text-align:center}</style></head><body><div><h1 style="font-weight:300;margin-bottom:1rem">Pagina niet gevonden</h1><a href="/" style="color:#8B1A2B">&larr; Terug naar home</a></div></body></html>`;
}
