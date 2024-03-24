
export default async function getDentist(id:string) {
    const response = await fetch(`https://project-dentist-backend.vercel.app/api/v1/dentists/${id}`, {
        method: 'GET'
    })
    if (!response.ok) {
        throw new Error("Failed to fetch dentist")
    }

    return await response.json()
}