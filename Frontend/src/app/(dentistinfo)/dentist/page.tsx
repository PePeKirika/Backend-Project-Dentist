import CardPanel from "@/components/CardPanel";
import getHospitals from "@/libs/getHospitals";
import HospitalCatalog from "@/components/HospitalCatalog";
import { Suspense } from "react";
import { LinearProgress } from "@mui/material";
import getDentists from "@/libs/getDentists";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export default async function Hospital() {
  const session = await getServerSession(authOptions)

    if (!session || !session.user.token) return null

  const hospital = getDentists(session.user.token);

  return (
    <main className="text-center p-5">
        <h1 className="text-xl font-medium">Select Hospital</h1>
        <Suspense fallback={ <p>Loading ... <LinearProgress/></p>}>
          <HospitalCatalog dentistsJson={hospital} />
        </Suspense>
    </main>
  );
}