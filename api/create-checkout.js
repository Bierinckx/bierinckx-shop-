// api/create-checkout.js - Stripe Checkout - Bierinckx Revenue Agency
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

module.exports = async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', 'https://bierinckx.com');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const { business_line, product_name, amount_eur, customer_email, locale = 'nl' } = req.body;
  if (!business_line || !product_name || !amount_eur) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card', 'ideal', 'bancontact', 'sepa_debit'],
      line_items: [{ price_data: { currency: 'eur', product_data: { name: product_name }, unit_amount: Math.round(amount_eur * 100) }, quantity: 1 }],
      mode: 'payment',
      customer_email,
      locale,
      automatic_tax: { enabled: true },
      metadata: { business_line },
      success_url: `https://bierinckx.com/bedankt?session={CHECKOUT_SESSION_ID}`,
      cancel_url: `https://bierinckx.com/shop`,
    });
    return res.status(200).json({ url: session.url, session_id: session.id });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};
