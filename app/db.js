import { PrismaClient } from "@prisma/client";

const prismaCLientSingleton = () => {
    return new PrismaClient()
}

const global = globalThis

export const prisma = global.prisma ?? prismaCLientSingleton()

if(process.env.NODE_ENV !== 'production') global.prisma = prisma
