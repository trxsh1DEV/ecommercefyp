import { Router } from 'express';
import stripeController from '../controllers/StripeController';

const router = new Router();

router.post('/payment', stripeController.index);

export default router;
