import { Router } from 'express';
import ProductController from '../controllers/ProductController';
import tokenAndAdmin from '../middlewares/tokenAndAdmin';

const router = new Router();

router.get('/', ProductController.index);
router.get('/:id', ProductController.show);

router.post('/', tokenAndAdmin, ProductController.store);
router.put('/edit/:id', tokenAndAdmin, ProductController.update);
router.delete('/:id', tokenAndAdmin, ProductController.delete);

export default router;
