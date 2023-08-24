import { NextResponse } from 'next/server'
import { prisma } from '@/app/db'

export async function GET() {
    const pages = await prisma.page.findMany()

    return NextResponse.json(pages)
}

export async function POST(request) {
    const formData = await request.formData()
    const title = formData.get('title')
    const content = formData.get('content')
    const slug = formData.get('slug')
    try {
        const page = await prisma.page.create({
            data: {
                title,
                content,
                slug
            },
        })
        return NextResponse.json(page)
    } catch (e) {
        console.error(e)
        return NextResponse.json(e)
    }
}

export async function DELETE(request) {
    const { id } = await request.json()
    const page = await prisma.page.delete({
        where: {
            id: id,
        },
    })
    return NextResponse.json(page)
}
