'use client'
import { useEffect, useState } from 'react'
export default function EditForm({ formData }) {
    const [form, setForm] = useState(null)
    useEffect(() => {
        setForm(formData)
    }, [formData])
    const handleInputChange = (e) => {
        e.preventDefault()
        const { name, value } = e.target
        setForm({
            ...form,
            [name]: value,
        })
    }
    const handleSubmit = async (e) => {
        e.preventDefault()
    }
    return (
        <>
            <form method="POST" action="/api/pages" className="md:w-6/12 mx-auto">
                <div className='flex flex-col'>
                    <input
                        className='form-control'
                        name="title"
                        placeholder="Page Title"
                        onChange={handleInputChange}
                        type="text"
                        value={form?.title || ''}
                    />
                    <textarea
                        className='form-control'
                        name="content"
                        onChange={handleInputChange}
                        value={form?.content || ''}
                    ></textarea>
                    <input
                        className='form-control'
                        name="slug"
                        placeholder="Page slug"
                        type="text"
                        onChange={handleInputChange}
                        value={form?.slug || ''}
                    />
                </div>
                <button className="btn" type="submit" onClick={handleSubmit}>
                    Create
                </button>
            </form>
        </>
    )
}
