import Image from "next/image"
import getHospital from "@/libs/getHospital"

export default async function HospitalDetailPage( {params} : { params : {hid:string}} ) {

    const hospitalDetail = await getHospital(params.hid)
    // mock
    // const mockHospital = new Map()
    // mockHospital.set("001", {name:'Chulalongkorn Hospital', image:'/img/chula.jpg'})
    // mockHospital.set("002", {name:'Rajavithi Hospital', image:'/img/rajavithi.jpg'})
    // mockHospital.set("003", {name:'Thammasat University Hospital', image:'/img/thammasat.jpg'})

  return (
    <main className="text-center p-5">
        <h1 className="text-lg font-medium"></h1>
        <div className="flex flex-row my-5">
            <Image src={hospitalDetail.data.picture}
            alt='Hospital Image'
            width={0} height={0} sizes="100vm" className="rounded-lg w-[30%]"/>
            <div className="text-md mx-5 text-left"> {hospitalDetail.data.name}
              <div className=" mx-5 ">{hospitalDetail.data.address} </div>
              <div className=" mx-5 ">{hospitalDetail.data.district} </div>
              <div className=" mx-5 ">{hospitalDetail.data.province} </div>
              <div className=" mx-5 ">{hospitalDetail.data.postalcode} </div>
              <div className=" mx-5 ">{hospitalDetail.data.tel} </div>
            </div>

        </div>
    </main>
  );
}

// export async function generateStaticParams() {
//     return [{hid:'001'},{hid:'002'},{hid:'003'}]
// }