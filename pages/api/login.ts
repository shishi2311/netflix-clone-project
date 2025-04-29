import bcrypt from 'bcryptjs';
import { NextApiRequest, NextApiResponse } from 'next';
import prismadb from '@/lib/prismadb';

export const config = {
    api: {
        bodyParser: true,
    },
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== 'POST') {
        return res.status(405).end();
    }

    try {
        const { email, password } = req.body;

        if (typeof email !== 'string' || typeof password !== 'string') {
            return res.status(400).json({ error: 'Invalid argument type' });
        }

        const user = await prismadb.user.findUnique({
            where: {
                email,
            }
        });
        if (!user) {
            return res.status(401).json({ error: 'Invalid email or password' });
        }

        const isPasswordValid = user.hashedPassword && await bcrypt.compare(password, user.hashedPassword);
        if (!isPasswordValid) {
            return res.status(401).json({ error: 'Invalid email or password' });
        }

        // Assuming you have a session or token generation logic here
        // For example, you can generate a JWT token and return it
        // const token = generateToken(user);

        return res.status(200).json({ message: 'Login successful' /*, token */ });

    } catch (error) {
        if (error instanceof TypeError) {
            return res.status(400).json({ error: 'Invalid argument type' });
        }
        console.log(error);
        return res.status(400).end();
    }
}
