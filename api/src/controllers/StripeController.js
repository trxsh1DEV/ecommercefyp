import stripe from 'stripe';

stripe(process.env.STRIPE_KEY);

class StripeController {
  async index(req, res) {
    stripe.charges.create({
      source: req.boy.tokenId,
      amount: req.body.amount,
      currency: 'brl',
    }, (stripeErr, stripeRes) => {
      if (stripeErr) {
        res.status(500).json(stripeErr);
      } else {
        res.status(200).json(stripeRes);
      }
    });
  }
}

export default new StripeController();
