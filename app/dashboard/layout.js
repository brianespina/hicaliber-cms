import { getServerSession } from 'next-auth'
import { authOptions } from '../config/authOptions'
import { redirect } from 'next/navigation'

export default async function DashboardLayout({ children }) {
    const session = await getServerSession(authOptions)
    if (session && session.user) {
        return <div>{children}</div>
    }
    return redirect('/login') 
}
