// api/webhook.js - Stripe Webhook Handler - Bierinckx Revenue Agency
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

module.exports = async (req, res) => {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const sig = req.headers['stripe-signature'];
  let event;
  try {
    event = stripe.webhooks.constructEvent(req.body, sig, process.env.STRIPE_WEBHOOK_SECRET);
  } catch (err) {
    return res.status(400).json({ error: `Webhook Error: ${err.message}` });
  }

  switch (event.type) {
    case 'checkout.session.completed': {
      const session = event.data.object;
      const bl = session.metadata?.business_line;
      if (bl === 'BL1_CRO') await triggerCROOnboarding(session);
      else if (bl === 'BL3_PSY') await triggerPsySession(session);
      else if (bl === 'BL4_CONSULTANCY') await triggerConsultancy(session);
      else if (bl === 'BL5_AURA_LUXE') await triggerFulfillment(session);
      break;
    }
    case 'payment_intent.payment_failed':
      console.error('Payment failed:', event.data.object.id);
      break;
    default:
      console.log('Unhandled event:', event.type);
  }
  res.status(200).json({ received: true });
};

async function triggerCROOnboarding(session) { console.log('BL1 CRO onboarding:', session.customer_email); }
async function triggerPsySession(session) { console.log('BL3 Psy session:', session.customer_email); }
async function triggerConsultancy(session) { console.log('BL4 Consultancy kickoff:', session.customer_email); }
async function triggerFulfillment(session) { console.log('BL5 AURA LUXE fulfillment:', session.customer_email); }
