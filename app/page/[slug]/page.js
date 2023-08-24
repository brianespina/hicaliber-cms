import { prisma } from '@/app/db'
import Link from 'next/link'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/app/config/authOptions'

export default async function Page({ params }) {
    const session = await getServerSession(authOptions)

    const { slug } = params
    const page = await prisma.page.findUnique({
        where: {
            slug: slug,
        },
    })
    return (
        <div>
            <h1>{page.title}</h1>
            <p>{page.content}</p>
            {session && (
                <small>
                    <Link href={`/dashboard/pages/edit/${page.id}`}>
                        edit page
                    </Link>
                </small>
            )}
        </div>
    )
}
