import getAppointment from "@/libs/getAppointment";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import CancelAppointment from "@/components/CancelAppointment";

export default async function AppointmentDetailPage({
  params,
}: {
  params: { aid: string };
}) {

  const session = await getServerSession(authOptions);

  if (!session || !session.user.token) return null;

  const appointmentDetail = await getAppointment(params.aid,session.user.token);

 

  return (
    <main className="text-center p-5">
      <div
          className="bg-slate-400 rounded-lg mx-5 my-2 px-10 py-5 text-black space-y-5"
          key={appointmentDetail.data._id}
        >
          <div className="text-2xl text">{appointmentDetail.data.userName}</div>
          <div className="text-xl">Dentist: {appointmentDetail.data.dentist.name}</div>
          <div className="text-xl">
            Date: {new Date(appointmentDetail.data.appDate).toLocaleDateString()}
          </div>
          <CancelAppointment appointmentID={appointmentDetail.data._id} />
        </div>
    </main>
  );
}