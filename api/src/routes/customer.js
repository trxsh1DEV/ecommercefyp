import { Router } from 'express';
import CustomerController from '../controllers/CustomerController';
import tokenAndAdmin from '../middlewares/tokenAndAdmin';

const router = new Router();

router.get('/all', tokenAndAdmin, CustomerController.index);
router.get('/:id', tokenAndAdmin, CustomerController.show);
router.post('/', tokenAndAdmin, CustomerController.store);
router.put('/:id', tokenAndAdmin, CustomerController.update);
router.delete('/:id', tokenAndAdmin, CustomerController.delete);

export default router;
