import { prisma } from '@/app/db'
import Link from 'next/link'

export default async function Pages() {
    //!catch errors
    const res = await prisma.page.findMany()
    const page = res.map((page) => (
        <div key={page.id}>
            <Link href={`/page/${page.slug}`}>{page.title}</Link>
        </div>
    ))
    return (
        <>
            <h1>Pages</h1>
            <Link href={'/dashboard/pages/edit/new'}>Create new page</Link>
            {page}
        </>
    )
}
