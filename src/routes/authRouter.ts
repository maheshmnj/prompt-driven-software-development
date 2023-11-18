// authRouter.ts
import { Router, Request, Response } from 'express';
import * as bcrypt from 'bcrypt';
import * as jwt from 'jsonwebtoken';
import UserService from '../services/userService';

const authRouter = Router();

// Signup Route
authRouter.post('/signup', async (req: Request, res: Response) => {
    try {
        const { username, password, role, name, contact_email, contact_phone, mailing_address } = req.body;

        // Hash the password before storing it
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create a new user in the database
        const newUser = await UserService.createUser({
            username,
            password: hashedPassword,
            role,
            name,
            contact_email,
            contact_phone,
            mailing_address,
        });

        // Respond with the newly created user
        res.json(newUser);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Login Route
authRouter.post('/login', async (req: Request, res: Response) => {
    try {
        const { username, password } = req.body;

        // Check if the user exists
        const user = await UserService.getUserByUsername(username);
        if (!user) {
            return res.status(401).json({ error: 'Invalid credentials' });
        }

        // Check if the provided password matches the stored hashed password
        const passwordMatch = await bcrypt.compare(password, user.password);
        if (!passwordMatch) {
            return res.status(401).json({ error: 'Invalid credentials' });
        }

        // Generate a JWT token
        const token = jwt.sign({ userId: user.id, username: user.username }, 'your-secret-key', { expiresIn: '1h' });

        // Respond with the token
        res.json({ token });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

export default authRouter;
