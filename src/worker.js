export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    const path = url.pathname;

    const cors = {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    };

    if (request.method === 'OPTIONS') return new Response(null, { status: 204, headers: cors });

    if (path === '/api/webhook' && request.method === 'POST') return handleWebhook(request, env, cors);
    if (path === '/api/create-checkout' && request.method === 'POST') return handleCheckout(request, env, cors);

    if (path === '/' || path === '') return html(getIndex());
    if (path === '/shop' || path === '/shop/') return html(getShop());
    if (path === '/bedankt') return html(getBedankt());

    return new Response(get404(), { status: 404, headers: { 'Content-Type': 'text/html;charset=UTF-8' } });
  }
};

function html(body) {
  return new Response(body, { headers: { 'Content-Type': 'text/html;charset=UTF-8' } });
}

async function handleWebhook(request, env, cors) {
  const body = await request.text();
  try {
    const event = JSON.parse(body);
    if (event.type === 'checkout.session.completed') {
      const s = event.data.object;
      console.log(`[WEBHOOK] BL:${s.metadata?.business_line} email:${s.customer_email}`);
    }
    return new Response(JSON.stringify({ received: true }), { status: 200, headers: { ...cors, 'Content-Type': 'application/json' } });
  } catch (e) {
    return new Response(JSON.stringify({ error: e.message }), { status: 400, headers: { ...cors, 'Content-Type': 'application/json' } });
  }
}

async function handleCheckout(request, env, cors) {
  let body;
  try { body = await request.json(); } catch { return new Response(JSON.stringify({ error: 'Invalid JSON' }), { status: 400, headers: cors }); }
  const { business_line, product_name, amount_eur, customer_email, locale = 'nl' } = body;
  if (!business_line || !product_name || !amount_eur) return new Response(JSON.stringify({ error: 'Missing fields' }), { status: 400, headers: cors });
  try {
    const params = new URLSearchParams({
      'payment_method_types[]': 'card',
      'line_items[0][price_data][currency]': 'eur',
      'line_items[0][price_data][product_data][name]': product_name,
      'line_items[0][price_data][unit_amount]': String(Math.round(amount_eur * 100)),
      'line_items[0][quantity]': '1',
      'mode': 'payment', 'locale': locale,
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
    if (!resp.ok) throw new Error(session.error?.message || 'Stripe error');
    return new Response(JSON.stringify({ url: session.url }), { status: 200, headers: { ...cors, 'Content-Type': 'application/json' } });
  } catch (e) {
    return new Response(JSON.stringify({ error: e.message }), { status: 500, headers: { ...cors, 'Content-Type': 'application/json' } });
  }
}

function getIndex() {
  return `<!DOCTYPE html>
<html lang="nl">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <meta name="description" content="AURA LUXE - Premium lifestyle webshop voor het hele gezin. Van baby tot senior. Kwaliteit voor iedereen.">
  <title>AURA LUXE | Bierinckx</title>
  <style>
    *{margin:0;padding:0;box-sizing:border-box}
    body{font-family:system-ui,sans-serif;background:#FAF9F6;color:#1a1a1a}
    header{background:#FAF9F6;border-bottom:1px solid #e8e0d0;padding:1.5rem 2rem;display:flex;justify-content:space-between;align-items:center}
    .logo{font-size:1.5rem;font-weight:700;letter-spacing:.15em;text-decoration:none;color:#1a1a1a}
    .logo span{color:#8B1A2B}
    nav a{margin-left:2rem;text-decoration:none;color:#555;font-size:.9rem;text-transform:uppercase;letter-spacing:.05em}
    nav a:hover{color:#8B1A2B}
    .hero{text-align:center;padding:6rem 2rem;max-width:800px;margin:0 auto}
    .hero h1{font-size:clamp(2rem,5vw,3.5rem);font-weight:300;letter-spacing:.1em;line-height:1.2;margin-bottom:1.5rem}
    .hero h1 strong{font-weight:700;color:#8B1A2B}
    .hero p{font-size:1.1rem;color:#666;line-height:1.7;margin-bottom:1rem}
    .hero .sub{font-size:.95rem;color:#999;margin-bottom:2.5rem;letter-spacing:.05em}
    .btns{display:flex;gap:1rem;justify-content:center;flex-wrap:wrap}
    .btn{padding:.85rem 2.5rem;font-size:.9rem;letter-spacing:.1em;text-transform:uppercase;text-decoration:none;border-radius:2px;transition:all .2s}
    .btn-p{background:#1a1a1a;color:#FAF9F6}.btn-p:hover{background:#8B1A2B}
    .btn-s{border:1px solid #1a1a1a;color:#1a1a1a}.btn-s:hover{background:#1a1a1a;color:#FAF9F6}
    .categories{background:#fff;padding:4rem 2rem;text-align:center}
    .categories h2{font-size:1rem;letter-spacing:.2em;text-transform:uppercase;color:#8B1A2B;margin-bottom:.75rem}
    .categories .sub2{font-size:.9rem;color:#aaa;margin-bottom:3rem;letter-spacing:.05em}
    .grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(180px,1fr));gap:1.5rem;max-width:1000px;margin:0 auto}
    .card{padding:2rem 1rem;border:1px solid #e8e0d0;transition:border-color .2s}
    .card:hover{border-color:#8B1A2B}
    .card .icon{font-size:2rem;margin-bottom:.75rem}
    .card h3{font-size:.85rem;letter-spacing:.15em;text-transform:uppercase;margin-bottom:.5rem}
    .card p{font-size:.85rem;color:#777;line-height:1.6}
    .services{background:#FAF9F6;padding:4rem 2rem;text-align:center}
    .services h2{font-size:1rem;letter-spacing:.2em;text-transform:uppercase;color:#8B1A2B;margin-bottom:3rem}
    .sgrid{display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:2rem;max-width:900px;margin:0 auto}
    .scard{padding:2rem 1rem;border:1px solid #e8e0d0}
    .scard h3{font-size:.85rem;letter-spacing:.15em;text-transform:uppercase;margin-bottom:.75rem}
    .scard p{font-size:.9rem;color:#777;line-height:1.6}
    footer{text-align:center;padding:2rem;font-size:.8rem;color:#aaa;border-top:1px solid #e8e0d0}
  </style>
</head>
<body>
  <header>
    <a class="logo" href="/">AURA <span>LUXE</span></a>
    <nav>
      <a href="/shop">Shop</a>
      <a href="/#categorie\u00ebn">Collecties</a>
      <a href="mailto:info@bierinckx.com">Contact</a>
    </nav>
  </header>

  <section class="hero">
    <h1>Premium <strong>Luxury Lifestyle</strong><br>voor het hele gezin</h1>
    <p>Van pasgeboren baby tot senior van 70 jaar — AURA LUXE biedt kwaliteitsproducten voor elke levensfase.</p>
    <p class="sub">Baby &amp; Kids &nbsp;&bull;&nbsp; Tieners &nbsp;&bull;&nbsp; Volwassenen &nbsp;&bull;&nbsp; Senioren &nbsp;&bull;&nbsp; BE / NL / FR</p>
    <div class="btns">
      <a href="/shop" class="btn btn-p">Ontdek de collectie</a>
      <a href="mailto:info@bierinckx.com" class="btn btn-s">Contact</a>
    </div>
  </section>

  <section class="categories" id="categorie\u00ebn">
    <h2>Onze collecties</h2>
    <p class="sub2">Kwaliteit voor elke leeftijd &mdash; van 0 tot 70 jaar</p>
    <div class="grid">
      <div class="card"><div class="icon">👶</div><h3>Baby &amp; Peuter</h3><p>0 &ndash; 3 jaar. Zacht, veilig en luxueus voor de allerkleinsten.</p></div>
      <div class="card"><div class="icon">👦</div><h3>Kids</h3><p>4 &ndash; 12 jaar. Premium kwaliteit voor actieve, nieuwsgierige kinderen.</p></div>
      <div class="card"><div class="icon">💃</div><h3>Tieners</h3><p>13 &ndash; 17 jaar. Stijlvol en eigentijds voor de nieuwe generatie.</p></div>
      <div class="card"><div class="icon">💎</div><h3>Volwassenen</h3><p>18 &ndash; 50 jaar. Luxury lifestyle voor de moderne, bewuste consument.</p></div>
      <div class="card"><div class="icon">🌟</div><h3>Senioren</h3><p>50 &ndash; 70 jaar. Elegantie en comfort op elke levensfase.</p></div>
      <div class="card"><div class="icon">🏠</div><h3>Home &amp; Wellness</h3><p>Voor het hele gezin. Premium woondecor en welzijn.</p></div>
    </div>
  </section>

  <section class="services">
    <h2>Bierinckx Revenue Agency</h2>
    <div class="sgrid">
      <div class="scard"><h3>Fractional CRO</h3><p>Chief Revenue Officer voor AI/SaaS scale-ups in BE/NL/DE.</p></div>
      <div class="scard"><h3>Psychologie</h3><p>Professionele online begeleiding. Boek via info@bierinckx.com.</p></div>
      <div class="scard"><h3>Consultancy</h3><p>Procesoptimalisatie voor KMO's in de Benelux.</p></div>
      <div class="scard"><h3>AURA LUXE</h3><p>Premium lifestyle voor het hele gezin &mdash; 0 tot 70 jaar.</p></div>
    </div>
  </section>

  <footer>&copy; 2026 Bierinckx Revenue Agency &mdash; Kessel, Belgi&euml; &mdash; <a href="mailto:info@bierinckx.com" style="color:#8B1A2B">info@bierinckx.com</a></footer>
</body>
</html>`;
}

function getShop() {
  return `<!DOCTYPE html>
<html lang="nl">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <meta name="description" content="AURA LUXE Shop - Premium lifestyle producten voor baby tot senior. Kwaliteit voor het hele gezin.">
  <title>Shop | AURA LUXE</title>
  <style>
    *{margin:0;padding:0;box-sizing:border-box}
    body{font-family:system-ui,sans-serif;background:#FAF9F6;color:#1a1a1a}
    header{padding:1.5rem 2rem;border-bottom:1px solid #e8e0d0;display:flex;justify-content:space-between;align-items:center}
    .logo{font-size:1.5rem;font-weight:700;letter-spacing:.15em;text-decoration:none;color:#1a1a1a}
    .logo span{color:#8B1A2B}
    nav a{margin-left:2rem;text-decoration:none;color:#555;font-size:.9rem;text-transform:uppercase}
    nav a:hover{color:#8B1A2B}
    .hero{text-align:center;padding:6rem 2rem}
    h1{font-size:2rem;font-weight:300;letter-spacing:.1em;margin-bottom:1rem}
    .sub{color:#999;font-size:.9rem;letter-spacing:.1em;margin-bottom:1rem}
    p{color:#777;margin-bottom:2rem;line-height:1.7}
    .badge{display:inline-block;background:#8B1A2B;color:#FAF9F6;padding:.5rem 1.5rem;font-size:.75rem;letter-spacing:.2em;text-transform:uppercase;margin-bottom:2rem}
    .cats{display:flex;flex-wrap:wrap;gap:1rem;justify-content:center;margin-top:2rem}
    .cat{padding:.5rem 1.5rem;border:1px solid #e8e0d0;font-size:.8rem;letter-spacing:.1em;text-transform:uppercase;color:#555}
    footer{text-align:center;padding:2rem;font-size:.8rem;color:#aaa;border-top:1px solid #e8e0d0;margin-top:4rem}
  </style>
</head>
<body>
  <header>
    <a class="logo" href="/">AURA <span>LUXE</span></a>
    <nav><a href="/">Home</a><a href="mailto:info@bierinckx.com">Contact</a></nav>
  </header>
  <section class="hero">
    <span class="badge">Coming Soon</span>
    <h1>Collectie in opbouw</h1>
    <p class="sub">Baby &bull; Kids &bull; Tieners &bull; Volwassenen &bull; Senioren &bull; Home &amp; Wellness</p>
    <p>Onze premium collectie voor het hele gezin wordt binnenkort gelanceerd.<br>
    Producten voor elke leeftijd &mdash; van 0 tot 70 jaar &mdash; in BE / NL / FR.<br>
    Schrijf je in via <a href="mailto:info@bierinckx.com" style="color:#8B1A2B">info@bierinckx.com</a> voor vroege toegang.</p>
    <div class="cats">
      <span class="cat">👶 Baby &amp; Peuter</span>
      <span class="cat">👦 Kids</span>
      <span class="cat">💃 Tieners</span>
      <span class="cat">💎 Volwassenen</span>
      <span class="cat">🌟 Senioren</span>
      <span class="cat">🏠 Home &amp; Wellness</span>
    </div>
  </section>
  <footer>&copy; 2026 Bierinckx Revenue Agency &mdash; <a href="mailto:info@bierinckx.com" style="color:#8B1A2B">info@bierinckx.com</a></footer>
</body>
</html>`;
}

function getBedankt() {
  return `<!DOCTYPE html><html lang="nl"><head><meta charset="UTF-8"><title>Bedankt | AURA LUXE</title><style>*{margin:0;padding:0;box-sizing:border-box}body{font-family:system-ui,sans-serif;background:#FAF9F6;display:flex;align-items:center;justify-content:center;min-height:100vh;text-align:center}h1{font-weight:300;margin-bottom:1rem}p{color:#777;margin-bottom:2rem}a{color:#8B1A2B}</style></head><body><div><h1>Bedankt voor uw bestelling!</h1><p>Uw aankoop is bevestigd. U ontvangt een bevestigingsmail.<br><a href="mailto:info@bierinckx.com">info@bierinckx.com</a></p><a href="/">&larr; Terug naar home</a></div></body></html>`;
}

function get404() {
  return `<!DOCTYPE html><html lang="nl"><head><meta charset="UTF-8"><title>404 | AURA LUXE</title><style>body{font-family:system-ui,sans-serif;background:#FAF9F6;display:flex;align-items:center;justify-content:center;min-height:100vh;text-align:center}</style></head><body><div><h1 style="font-weight:300;margin-bottom:1rem">Pagina niet gevonden</h1><a href="/" style="color:#8B1A2B">&larr; Terug naar home</a></div></body></html>`;
}
