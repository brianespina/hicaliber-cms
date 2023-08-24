import { NextResponse } from 'next/server'
import { revalidatePath } from 'next/cache'
import { prisma } from '@/app/db'

export async function POST(request) {
  //      await prisma.user.delete({
  //          where: {
  //              email: 'espinabrian@gmail.com',
  //          },
  //      })
//    const { name, email } = await request.json()
//    const userExists = await prisma.user.findUnique({
//        where: {
//            email: email,
//        },
//    })
//    if (!userExists) {
//        const user = await prisma.user.create({
//            data: {
//                email,
//                name,
//            },
//        })
//    }
//    revalidatePath('/about')
    return NextResponse.json({})
}
