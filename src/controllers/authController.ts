// authController.ts
import { Request, Response } from 'express';
import * as bcrypt from 'bcrypt';
import * as jwt from 'jsonwebtoken';
import userService from '../services/userService';

const saltRounds = 12;
const jwtSecret = process.env.JWT_SECRET || 'fallback-secret-key'; // Replace with a secure secret key for JWT

class AuthController {
    async signup(req: Request, res: Response) {
        try {
            const { username, password, role, name, contact_email, contact_phone, mailing_address } = req.body;

            // Hash the password before storing it in the database
            const hashedPassword = await bcrypt.hash(password, saltRounds);

            const user = await userService.createUser({
                username,
                password: hashedPassword,
                role,
                name,
                contact_email,
                contact_phone,
                mailing_address,
            });

            res.status(201).json({ user });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }

    async login(req: Request, res: Response) {
        try {
            const { username, password } = req.body;

            const user = await userService.getUserByUsername(username);

            if (!user) {
                return res.status(401).json({ error: 'Invalid username or password' });
            }

            const passwordMatch = await bcrypt.compare(password, user.password);

            if (!passwordMatch) {
                return res.status(401).json({ error: 'Invalid username or password' });
            }

            // Generate a JWT token for the authenticated user
            const token = jwt.sign({ userId: user.id, username: user.username }, jwtSecret, { expiresIn: '1h' });

            res.status(200).json({ token });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }
}

export default new AuthController();
