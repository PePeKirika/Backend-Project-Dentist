import Link from "next/link"
import Card from "./Card"

export default async function HospitalCatalog({hospitalsJson} : {hospitalsJson: Promise<HospitalJson>}) {

    const hospitalsJsonReady = await hospitalsJson

    return (
            <div style={{margin:"20px",display:"flex", flexDirection:"row", justifyContent:"space-around", alignContent:"space-around", flexWrap:"wrap"}}>
                {
                    hospitalsJsonReady.data.map( (hospitalItem) => (
                    <Link href={`/hospital/${hospitalItem.id}`} className="w-1/5">
                        <Card key={hospitalItem.id} hospitalName={hospitalItem.name} imgSrc={hospitalItem.picture} />
                    </Link>)
                    )
                }
            </div>
    )
}