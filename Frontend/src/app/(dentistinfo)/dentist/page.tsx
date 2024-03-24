import DentistCatalog from "@/components/DentistCatalog";
import { Suspense } from "react";
import { LinearProgress } from "@mui/material";
import getDentists from "@/libs/getDentists";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export default async function Dentist() {
  const session = await getServerSession(authOptions)

    if (!session || !session.user.token) return null

  const dentist = getDentists(session.user.token);

  return (
    <main className="text-center p-5">
        <h1 className="text-xl font-medium text-black">Select Dentist</h1>
        <Suspense fallback={ <p>Loading ... <LinearProgress/></p>}>
          <DentistCatalog dentistsJson={dentist} />
        </Suspense>
    </main>
  );
}