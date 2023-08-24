import { NextResponse } from 'next/server'
import { prisma } from '@/app/db'

export async function GET(request) {
    const users = await prisma.user.findMany()
    return NextResponse.json(users)
}
