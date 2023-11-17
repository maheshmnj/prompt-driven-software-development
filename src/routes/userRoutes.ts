// userRoutes.ts
import express from 'express';
import userService from '../services/userService';

const router = express.Router();

router.get('/', async (req, res) => {
    const users = await userService.getAllUsers();
    res.json(users);
});

router.get('/:id', async (req, res) => {
    const id = parseInt(req.params.id);
    const user = await userService.getUserById(id);
    res.json(user);
});

router.post('/', async (req, res) => {
    const newUser = req.body;
    const createdUser = await userService.createUser(newUser);
    res.json(createdUser);
});

export default router;
