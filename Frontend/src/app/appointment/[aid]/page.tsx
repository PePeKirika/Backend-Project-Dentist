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

  const appointmentDetail = await getAppointment(
    params.aid,
    session.user.token
  );

  return (
    <main className="text-center py-5">
      <div
        className="bg-slate-200 font-mono font-semibold w-[512px] rounded-lg mx-auto my-2 px-10 py-5 text-black space-y-8"
        key={appointmentDetail.data._id}
      >
        <div className="text-2xl">{appointmentDetail.data.userName}</div>
        <div className="text-xl text-slate-700">
          Dentist : Doctor {appointmentDetail.data.dentist.name}
        </div>
        <div className="text-xl text-slate-700">
          Appointment Date :{" "}
          {new Date(appointmentDetail.data.appDate).toLocaleDateString()}
        </div>
        <div className="mx-auto">
          <CancelAppointment appointmentID={appointmentDetail.data._id} />
        </div>
      </div>
    </main>
  );
}
