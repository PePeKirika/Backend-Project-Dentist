import Link from "next/link"
import Card from "./Card"

export default async function DentistCatalog({dentistsJson} : {dentistsJson: Promise<DentistJson>}) {

    const dentistsJsonReady = await dentistsJson

    return (
            <div style={{margin:"20px",display:"flex", flexDirection:"row", justifyContent:"space-around", alignContent:"space-around", flexWrap:"wrap"}}>
                {
                    dentistsJsonReady.data.map( (dentistItem) => (
                    <Link href={`/dentist/${dentistItem._id}`} className="w-1/5">
                        <Card key={dentistItem._id} dentistName={dentistItem.name} imgSrc={dentistItem.picture} />
                    </Link>)
                    )
                }
            </div>
    )
}