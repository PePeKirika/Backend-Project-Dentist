"use client";
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
    };
    fetchAppointment();
  }, []);

  const router = useRouter();

  const cancelAppointment = async () => {
    await deleteAppointment(appointmentDetail.data._id, token);
    router.push("/appointment");
  };

  if (!appointmentDetail) return null;

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
        <div className="space-x-10">
          <Link href={`/appointment/${appointmentDetail.data._id}/update`}>
            <button
              className="block rounded-md bg-sky-600 hover:bg-indigo-600 px-3 py-2 shadow-sm text-white inline"
              name="Edit Appointment"
            >
              Edit Appointment
            </button>
          </Link>
          <button
            className="block rounded-md bg-rose-500 hover:bg-rose-700 px-3 py-2 shadow-sm text-white inline"
            name="Cancel Appointment"
            onClick={cancelAppointment}
          >
            Cancel Appointment
          </button>
        </div>
      </div>
    </main>
  );
}
