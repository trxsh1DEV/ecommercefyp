import { Router } from 'express';
import userController from '../controllers/UserController';
import loginRequired from '../middlewares/loginRequired';
import tokenAndAdmin from '../middlewares/tokenAndAdmin';

const router = new Router();

router.get('/all', tokenAndAdmin, userController.index);
router.get('/get/:id', tokenAndAdmin, userController.show);
router.get('/stats', tokenAndAdmin, userController.stats);
router.post('/store', tokenAndAdmin, userController.register);
router.put('/', tokenAndAdmin, userController.update);
router.delete('/:id', tokenAndAdmin, userController.delete);

export default router;
