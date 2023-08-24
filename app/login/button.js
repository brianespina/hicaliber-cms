'use client'
import { signIn, signOut } from 'next-auth/react'

export default function Button({ session }) {
    return (
        <>
            {session ? (
                <button onClick={() => signOut()} className='font-bold'>Sign Out</button>
            ) : (
                <button onClick={() => signIn()}className='font-bold'>Sign in</button>
            )}
        </>
    )
}
