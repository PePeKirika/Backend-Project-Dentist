"use client";
import DateReserve from "@/components/DateReserve";
import Link from "next/link";
import { TextField } from "@mui/material";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import getUserProfile from "@/libs/getUserProfile";
import { useState, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import dayjs, { Dayjs } from "dayjs";
import { useSession } from "next-auth/react";
import addAppointment from "@/libs/addAppointment";

export default function AppointmentMaking() {
  const { data: session } = useSession();

  const token = session?.user.token;
  if (!token) return null;

  const [appointmentDate, setAppointmentDate] = useState<Dayjs | null>(null);

  let appDate = dayjs(appointmentDate).format("YYYY/MM/DD");

  const searchParams = useSearchParams();

  const dentistID = searchParams.get("dentistid");
  const dentist = searchParams.get("dentistname");
  if (!dentistID || !dentist) return null;

  const makingAppointment = async () => {
    const appointment = await addAppointment(
      dentistID,
      appDate,
      token
    );
    if (appointment) {
      alert("Appointment booked successfully");
    } else {
      alert("Appointment booking failed");
    }
  };

  return (
    <main className="w-[100%] flex flex-col items-center space-y-4 mt-20 mb-20">
      <div className="text-[36px] font-medium text-[#008DDA] mb-10 mt-10">
        Vaccine Appointment
      </div>

      <div className="w-fit space-y-2 text-[#008DDA] text-lg font-bold text-center">
        <div className="text-[28px] font-medium text-[#008DDA] mb-10">
          Dentist : {dentist}
        </div>
        <div className="text-md mx-auto">Choose your Appointment date</div>
        <DateReserve
          onDateChange={(value: Dayjs) => {
            setAppointmentDate(value);
          }}
        />
      </div>

      <button
        className="block rounded-md bg-[#008DDA] hover:bg-indigo-500 px-5 py-4 shadow-sm text-xl text-bold"
        name="Book Dentist"
        onClick={makingAppointment}
      >
        Book Dentist
      </button>
    </main>
  );
}
