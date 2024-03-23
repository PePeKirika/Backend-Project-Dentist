import Image from "next/image";
import getDentist from "@/libs/getDentist";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import Link from "next/link";
import Button from "@/components/SelectDentist";

export default async function DentistDetailPage({
  params,
}: {
  params: { did: string };
}) {
  const session = await getServerSession(authOptions);

  if (!session || !session.user.token) return null;

  const dentistDetail = await getDentist(params.did, session.user.token);

  // mock
  // const mockHospital = new Map()
  // mockHospital.set("001", {name:'Chulalongkorn Hospital', image:'/img/chula.jpg'})
  // mockHospital.set("002", {name:'Rajavithi Hospital', image:'/img/rajavithi.jpg'})
  // mockHospital.set("003", {name:'Thammasat University Hospital', image:'/img/thammasat.jpg'})

  return (
    <main className="text-center p-5">
      <h1 className="text-lg font-medium"></h1>
      <div className="flex flex-row my-5">
        <Image
          src={dentistDetail.data.picture}
          alt="Hospital Image"
          width={0}
          height={0}
          sizes="100vm"
          className="rounded-lg w-[30%]"
        />
        <div className="text-md mx-5 text-left text-black">
          {" "}
          {dentistDetail.data.name}
          <div className=" mx-5 ">
            Year Of Experiences: {dentistDetail.data.yearsOfExperience}{" "}
          </div>
          <div className=" mx-5 ">
            Area Of Expertise: {dentistDetail.data.areaOfExpertise}{" "}
          </div>
          <Button
            Text="Select"
            url="/appointment"
            prop={dentistDetail.data.name}
          />
        </div>
      </div>
    </main>
  );
}

// export async function generateStaticParams() {
//     return [{hid:'001'},{hid:'002'},{hid:'003'}]
// }
