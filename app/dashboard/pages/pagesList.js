'use client'
import { useEffect, useState } from 'react'

export default function PagesList() {
    const [pages, setPages] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const fetchPages = async () => {
        //!catch errors
        const response = await fetch('http://localhost:3000/api/pages')
        const pages = await response.json()
        setPages(pages)
        setIsLoading(false)
    }
    useEffect(() => {
        fetchPages()
    }, [])

    const handleClickDelete = async (id) => {
        setIsLoading(true)
        const page = await fetch('http://localhost:3000/api/pages', {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                id,
            }),
        })
        fetchPages()
    }
    const pageList = pages.map((page) => {
        return (
            <div key={page.id}>
                {page.title}{' '}
                <button onClick={() => handleClickDelete(page.id)}>
                    Delete Page
                </button>
            </div>
        )
    })

    if (isLoading) {
        return <div>Loading...</div>
    }
    return <>{pageList}</>
}
