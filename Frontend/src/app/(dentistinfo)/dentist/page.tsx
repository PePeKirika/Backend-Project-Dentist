import CardPanel from "@/components/CardPanel";
import getHospitals from "@/libs/getHospitals";
import HospitalCatalog from "@/components/HospitalCatalog";
import { Suspense } from "react";
import { LinearProgress } from "@mui/material";

export default async function Hospital() {
  const hospital = getHospitals();

  return (
    <main className="text-center p-5">
        <h1 className="text-xl font-medium">Select Hospital</h1>
        <Suspense fallback={ <p>Loading ... <LinearProgress/></p>}>
          <HospitalCatalog hospitalsJson={hospital} />
        </Suspense>
    </main>
  );
}