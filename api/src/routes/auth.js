import { Router } from 'express';
import AuthController from '../controllers/AuthController';

const router = new Router();

// Register
router.post('/register/', AuthController.register);
// Login
router.post('/login/', AuthController.login);

export default router;
