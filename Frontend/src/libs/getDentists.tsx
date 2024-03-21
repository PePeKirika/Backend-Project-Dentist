
import {resolve} from "path"

export default async function getDentists(token:string) {

    await new Promise( (resolve)=> setTimeout(resolve, 1000))

    const response = await fetch("http://localhost:5000/api/v1/dentists", {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${token}`,
        }
    })
    if (!response.ok) {
        throw new Error("Failed to fetch dentists")
    }

    return await response.json()
}