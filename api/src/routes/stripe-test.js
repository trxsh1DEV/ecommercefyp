// import { Router } from 'express';
// import stripeController from '../controllers/StripeController';

// const router = new Router();

// router.post('/payment', stripeController.index);

// export default router;
// const YOUR_DOMAIN = 'http://localhost:5123';

// router.post('/', async (req, res) => {
//   const session = await stripe.checkout.sessions.create({
//     line_items: [
//       {
//         // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
//         price_data: {
//           currency: 'usd',
//           product_data: {
//             name: 'Mouse',
//           },
//           unit_amount: 2000,
//         },
//         quantity: 1,
//       },
//     ],
//     mode: 'payment',
//     success_url: `${YOUR_DOMAIN}/success`,
//     cancel_url: `${YOUR_DOMAIN}/cancel`,
//   });

//   res.redirect(303, session.url);
// });
