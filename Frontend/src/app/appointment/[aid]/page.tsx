'use client'
import getAppointment from "@/libs/getAppointment";
import deleteAppointment from "@/libs/deleteAppointment";
import Link from "next/link";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useState } from "react";

export default function AppointmentDetailPage({
  params,
}: {
  params: { aid: string };
}) {

  const [appointmentDetail, setAppointmentDetail] = useState<any>(null);

  const { data: session } = useSession();

  const token = session?.user.token;
  if (!token) return null;

  useEffect(() => {
    const fetchAppointment = async () => {
      const appointment = await getAppointment(params.aid, token);
      setAppointmentDetail(appointment);
    }
    fetchAppointment();
  }, []);

  const router = useRouter();

    const cancelAppointment = async () => {
        await deleteAppointment(appointmentDetail.data._id,token);
        router.push('/appointment');
      }

  if (!appointmentDetail) return null;

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
          <Link href={`/appointment/${appointmentDetail.data._id}/update`}>
            <button className="block rounded-md bg-sky-600 hover:bg-indigo-600 px-3 py-2 shadow-sm text-white"
              name="Edit Appointment">
              Edit Appointment
            </button>
          </Link>
          <button className="block rounded-md bg-sky-600 hover:bg-indigo-600 px-3 py-2 shadow-sm text-white"
            name="Cancel Appointment" onClick={cancelAppointment}>
            Cancel Appointment
          </button>
        </div>
    </main>
  );
}