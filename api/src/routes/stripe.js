import { Router } from 'express';
import stripeController from '../controllers/StripeController';
import loginRequired from '../middlewares/loginRequired';

const router = new Router();

router.post('/', stripeController.index);

export default router;
