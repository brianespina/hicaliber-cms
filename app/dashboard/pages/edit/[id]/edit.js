'use client'
import { useEffect, useState } from 'react'
export default function EditForm({ formData }) {
    const [form, setForm] = useState(null)
    const [sections, setSections] = useState([])

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
        console.log(form)
    }

    const sectionList = sections.map((section, idx) => {
        return (
            <div
                className="p-8 mb-4 bg-gray-50 text-center rounded-md"
                key={idx}
            >
                <h2 className="font-bold">{section.title}</h2>
                {section.content}
            </div>
        )
    })
    const addSection = (e) => {
        e.preventDefault()
        setSections([
            ...sections,
            {
                order: 1,
                title: 'First Section',
                content: 'this is the first section',
            },
        ])
    }
    return (
        <>
            <form
                method="POST"
                onSubmit={handleSubmit}
                className="md:w-6/12 mx-auto"
            >
                <div className="flex flex-col">
                    <input
                        className="form-control"
                        name="title"
                        placeholder="Page Title"
                        onChange={handleInputChange}
                        type="text"
                        value={form?.title || ''}
                    />
                    <textarea
                        className="form-control"
                        name="content"
                        onChange={handleInputChange}
                        value={form?.content || ''}
                    ></textarea>
                    <input
                        className="form-control"
                        name="slug"
                        placeholder="Page slug"
                        type="text"
                        onChange={handleInputChange}
                        value={form?.slug || ''}
                    />
                </div>
                <section className="mb-4">{sectionList}</section>
                <div className="flex gap-2">
                    <button className="btn" type="submit">
                        Create
                    </button>
                    <button className="btn" onClick={addSection}>
                        Add section +
                    </button>
                </div>
            </form>
        </>
    )
}
