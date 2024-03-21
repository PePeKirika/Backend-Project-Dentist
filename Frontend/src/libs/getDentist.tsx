
export default async function getDentist(id:string) {
    const response = await fetch(`https://project-dentist-backend.vercel.app/api/v1/dentists/${id}`)
    if (!response.ok) {
        throw new Error("Failed to fetch hospital")
    }

    return await response.json()
}