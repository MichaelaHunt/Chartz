import { Router, type Request, type Response } from 'express';
import { User } from '../models/user';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

export const login = async (req: Request, res: Response) => {
    const { username, password } = req.body;

    // Validate input
    if (!username || !password) {
        return res.status(400).json({ message: 'Username and password are required' });
    }

    try {
        // Check if the user exists
        const user = await User.findOne({
            where: { username },
        });

        if (!user) {
            return res.status(401).json({ message: 'Authentication failed' });
        }

        // Validate password
        const passwordMatch = await bcrypt.compare(password, user.password);
        if (!passwordMatch) {
            return res.status(401).json({ message: 'Authentication failed' });
        }

        // Generate JWT
        const secretKey = process.env.JWT_SECRET_KEY || '';
        const token = jwt.sign(
            { id: user.id, username: user.username },
            secretKey,
            { expiresIn: '1h' }
        );

        // Respond with token and user data
        return res.json({
            token,
            user: {
                id: user.id,
                username: user.username,
                email: user.email,
            },
        });
    } catch (error) {
        console.error('Error during login:', error);
        return res.status(500).json({ message: 'Internal server error' });
    }
};

const router = Router();

// POST request to login
router.post('/login', login);

export default router;
