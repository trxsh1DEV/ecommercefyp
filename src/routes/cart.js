import { Router } from 'express';
import cartController from '../controllers/CartController';
import loginRequired from '../middlewares/loginRequired';

const router = new Router();
router.get('/', loginRequired, cartController.index);
// router.get('/:id', loginRequired, cartController.show)

router.post('/', loginRequired, cartController.store);
router.put('/', loginRequired, cartController.update);
router.delete('/', loginRequired, cartController.delete);

export default router;
