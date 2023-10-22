import { Router } from 'express';
import stripeController from '../controllers/StripeController';
import loginRequired from '../middlewares/loginRequired';

const router = new Router();

router.post('/', loginRequired, stripeController.index);

export default router;
