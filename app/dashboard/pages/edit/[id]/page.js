import { prisma } from '@/app/db'
import EditForm from './edit'

export default async function Edit({ params }) {
    let page
    let pageTitle = "New Page"
    const { id } = params
    if (id !== 'new') {
        const resPage = await prisma.page.findUnique({
            where: {
                id: id,
            },
        })
        page = resPage
        pageTitle = page.title
    }
    
    return (
        <>
            <h1>Edit {pageTitle}</h1>
            <EditForm formData={page} />
        </>
    )
}
