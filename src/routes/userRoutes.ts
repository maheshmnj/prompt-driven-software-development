// userRoutes.ts
import express from 'express';
import userController from '../controllers/userController';
import { authMiddleware } from '../middleware/authMiddleware';
import { adminMiddleware } from '../middleware/routeMiddleware';
const router = express.Router();

router.post('/', userController.createUser);

// Protected routes
router.get('/', adminMiddleware, userController.getAllUsers);
router.put('/:id', authMiddleware, userController.updateUser);
router.get('/:id', authMiddleware, userController.getUserById);
router.delete('/:id', authMiddleware, userController.deleteUser);

export default router;
