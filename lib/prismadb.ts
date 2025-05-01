import { PrismaClient } from '@prisma/client';

// @ts-ignore
const client = global.prismadb || new PrismaClient({
    log: [
        {
            emit: 'event',
            level: 'query',
        },
    ],
});

// @ts-ignore
if (process.env.NODE_ENV === 'production') global.prismadb = client;

export default client;