import { NextResponse } from 'next/server'

export async function POST(request){
    const formData = await request.formData()
    const email = formData.get("email")
    const password = formData.get("password")
    console.log(email, password)
    return NextResponse.json({data: "hello from login get request"})
}
