import { prisma } from "@/app/db"
export default async function Edit(params){
    const {id} = params
    const page = await prisma.page.findFirst({
        where: {
            id: id
        }
    }) 
    return(
        <>
        <h1>{page.title}</h1>
        </>
    )
}
