require('dotenv').config();
const stripe = require('stripe')(process.env.STRIPE_KEY);

class StripeController {
  async index(req, res) {
    const YOUR_DOMAIN = 'http://localhost:5173';

    const line_items = req.body.products.map((item) => {
      return {
        price_data: {
          currency: 'brl',
          product_data: {
            name: item.title,
            images: [item.image],
            description: item.desc,
            metadata: {
              id: item._id,
            },
          },
          unit_amount: item.price * 100,
        },
        quantity: item.quantity,
      };
    });

    const session = await stripe.checkout.sessions.create({
      // Opções adicionais
      payment_method_types: ['card'],
      shipping_address_collection: {
        allowed_countries: ['BR'],
      },
      shipping_options: [
        {
          shipping_rate_data: {
            type: 'fixed_amount',
            fixed_amount: {
              amount: 0,
              currency: 'brl',
            },
            display_name: 'Frete gratuito',
            // Delivers between 5-7 business days
            delivery_estimate: {
              minimum: {
                unit: 'business_day',
                value: 5,
              },
              maximum: {
                unit: 'business_day',
                value: 7,
              },
            },
          },
        },
        {
          shipping_rate_data: {
            type: 'fixed_amount',
            fixed_amount: {
              amount: 1500,
              currency: 'brl',
            },
            display_name: 'Entrega rápida',
            // Delivers in exactly 1 business day
            delivery_estimate: {
              minimum: {
                unit: 'business_day',
                value: 1,
              },
              maximum: {
                unit: 'business_day',
                value: 1,
              },
            },
          },
        },
      ],
      phone_number_collection: {
        enabled: true,
      },
      // Fim
      line_items,
      mode: 'payment',
      success_url: `${YOUR_DOMAIN}/checkout-success`,
      cancel_url: `${YOUR_DOMAIN}/cancel`,
    });
    res.send({ url: session.url });
    // res.redirect(303, session.url);
  }
}

export default new StripeController();
