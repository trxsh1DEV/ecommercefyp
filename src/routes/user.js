import { Router } from 'express';
import userController from '../controllers/UserController';
import loginRequired from '../middlewares/loginRequired';
import tokenAndAdmin from '../middlewares/tokenAndAdmin';

const router = new Router();

router.get('/all', tokenAndAdmin, userController.index);
router.get('/', loginRequired, userController.show);
router.get('/stats', tokenAndAdmin, userController.stats);

router.put('/', loginRequired, userController.update);
router.delete('/', loginRequired, userController.delete);

export default router;
