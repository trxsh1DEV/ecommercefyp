import { Router } from 'express';
import ProductController from '../controllers/ProductController';
import tokenAndAdmin from '../middlewares/tokenAndAdmin';

const router = new Router();

router.get('/', tokenAndAdmin, ProductController.index);
router.get('/:id', tokenAndAdmin, ProductController.show);

router.post('/', tokenAndAdmin, ProductController.store);
router.put('/:id', tokenAndAdmin, ProductController.update);
router.delete('/:id', tokenAndAdmin, ProductController.delete);

export default router;
