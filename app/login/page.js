
async function fetchData() {
    const res = await fetch('http://localhost:3001/api/login')
    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }
    return res.json()
}

export default async function Login() {

    return (
        <div>
            <h2>Login Form</h2>
        </div>
    )
}
