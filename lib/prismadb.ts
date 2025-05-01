/* eslint-disable */
import { PrismaClient } from '@prisma/client';

// Extend the global type to include the prismadb property
declare global {
    // Use var instead of let to avoid block-scoping issues
    var prismadb: PrismaClient | undefined;
}

// Adjust the global declaration to avoid redeclaration issues
export const client = globalThis.prismadb ?? new PrismaClient({
    log: [
        {
            emit: 'event',
            level: 'query',
        },
    ],
});

globalThis.prismadb = client;

export default client;