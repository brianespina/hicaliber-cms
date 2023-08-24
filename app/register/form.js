'use client'

export default function Form() {
    async function handleSubmit(e) {
        e.preventDefault()
        const { target } = e
        const formData = {
            name: target.name.value,
            email: target.email.value,
        }
        const testFetch = await fetch('http://localhost:3000/api/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        })
    }
    return (
        <form onSubmit={handleSubmit}>
            <input type="name" name="name" />
            <input type="email" name="email" />
            <button type="submit">Register</button>
        </form>
    )
}
