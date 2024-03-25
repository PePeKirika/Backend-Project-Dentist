'use client'
import getAppointment from "@/libs/getAppointment";
import deleteAppointment from "@/libs/deleteAppointment";
import { Select, MenuItem } from "@mui/material";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useState } from "react";
import dayjs, { Dayjs } from "dayjs";
import { DatePicker } from "@mui/x-date-pickers";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import getDentists from "@/libs/getDentists";
import updateAppointment from "@/libs/updateAppointment";

export default function AppointmentDetailPage({
  params,
}: {
  params: { aid: string };
}) {

  const [appointmentDetail, setAppointmentDetail] = useState<any>(null);
  const [appointmentDate, setAppointmentDate] = useState<Dayjs|null>(null);
  const [dentist, setDentist] = useState<any>(null);
  const [allDentist, setAllDentist] = useState<any>(null);
  

  const { data: session } = useSession();

  const token = session?.user.token;
  if (!token) return null;

  useEffect(() => {
    const fetchData = async () => {
      const appointment = await getAppointment(params.aid, token);
      const dentist = await getDentists();
      setAllDentist(dentist);
      setAppointmentDetail(appointment);
      setAppointmentDate(dayjs(appointment.data.appDate));
      setDentist(appointment.data.dentist._id);
    }
    fetchData();
  },[]);

 

  const router = useRouter();

    const editAppointment = async () => {
        await updateAppointment(appointmentDetail.data._id,dentist,dayjs(appointmentDate).format("YYYY/MM/DD"),token);
        router.push(`/appointment/${appointmentDetail.data._id}`);
      }

  if (!appointmentDetail) return null;

  return (
    <main className="text-center p-5">
      <div
          className="bg-slate-400 rounded-lg mx-5 my-2 px-10 py-5 text-black space-y-5"
          key={appointmentDetail.data._id}
        >
          <div className="text-2xl text">{appointmentDetail.data.userName}</div>
          <div className="text-xl">Dentist: 
            <Select variant="standard" name="dentist" id="dentist" value={dentist} className="h2-[2em] w-[200px]" onChange={(e) => {setDentist(e.target.value)}}>
                {allDentist.data.map((dentistItem:DentistItem) => {
                  return <MenuItem value={dentistItem._id}>{dentistItem.name}</MenuItem>
                })}
            </Select>
          </div>
          <div className="text-md mx-auto">Choose your Appointment date</div>
          <div className="rounded-lg space-x-5 space-y-2 w-[100%] px-10 py-5 flex flex-row justify-center">
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                className=""
                value={appointmentDate}
                onChange={(value) => {
                  setAppointmentDate(value);
                }}
              />
            </LocalizationProvider>
          </div>
          <button className="block rounded-md bg-sky-600 hover:bg-indigo-600 px-3 py-2 shadow-sm text-white"
            name="Edit Appointment" onClick={editAppointment}>
            Edit Appointment
          </button>
        </div>
    </main>
  );
}