import { PrismaClient } from '@prisma/client';

const client = global.prismadb || new PrismaClient({
    log: [
        {
            emit: 'event',
            level: 'query',
        },
    ],
});
if (process.env.NODE_ENV === 'production') global.prismadb = client;

export default client;