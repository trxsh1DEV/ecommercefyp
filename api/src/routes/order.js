import { Router } from 'express';
import orderController from '../controllers/OrderController';
import loginRequired from '../middlewares/loginRequired';
import tokenAndAdmin from '../middlewares/tokenAndAdmin';

const router = new Router();
router.get('/', tokenAndAdmin, orderController.index);
router.get('/income', tokenAndAdmin, orderController.income);
router.get('/find/:userId', loginRequired, orderController.show);

router.post('/', loginRequired, orderController.store);
router.put('/:id', tokenAndAdmin, orderController.update);
router.delete('/:id', tokenAndAdmin, orderController.delete);

export default router;
