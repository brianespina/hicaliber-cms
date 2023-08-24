'use client'
import { useEffect, useState} from 'react'
export default function EditForm({ formData }) {
    const [form , setForm] = useState(null) 
    useEffect(() => {
        setForm(formData)
    }, [formData])
    const handleInputChange = e => {
        e.preventDefault()
        const {name, value} = e.target
        setForm({
            ...form,
            [name]: value
        })
    } 
    const handleSubmit = async e => {
        e.preventDefault()

    }
    return (
        <form method="POST" action="/api/pages">
            <input name="title" placeholder="Page Title" onChange={handleInputChange} type="text" value={form?.title || ''}/>
            <input name="content" placeholder="Page Content" type="text" onChange={handleInputChange} value={form?.content || ''}/>
            <input name="slug" placeholder="Page slug::" type="text" onChange={handleInputChange} value={form?.slug || ''}/>
            <button type="submit" onClick={handleSubmit}>Create</button>
        </form>
    )
}
