'use client'
import { useEffect, useState } from 'react'
export default function UserList() {
    let [users, setUsers] = useState([])
    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch('http://localhost:3000/api/users')
            const users = await res.json()
            setUsers(users)
        }
        fetchData()
    }, [])

    const usersList = users.map((user) => {
        return (
            <div key={user.id}>
                <div>
                    {user.name}: {user.email}
                </div>
            </div>
        )
    })
    return <>{usersList}</>
}
