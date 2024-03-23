'use client'
import DateReserve from "@/components/DateReserve";
import Link from "next/link";
import { TextField } from "@mui/material";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import getUserProfile from "@/libs/getUserProfile";
import { useState,useEffect } from "react";
import dayjs, { Dayjs } from "dayjs";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux/store";
import { useSearchParams } from "next/navigation";
import { useSession } from "next-auth/react";
import addAppointment from "@/libs/addAppointment";

export default function AppointmentMaking () {
    const { data: session } = useSession()

    const token = session?.user.token
    if (!token) return null

    const [appointmentDate, setAppointmentDate] = useState<Dayjs|null>(null)
    const [appointmentDentist, setAppointmentDentist] = useState<string>("")

    let appDate = dayjs(appointmentDate).format('YYYY/MM/DD')

    const makingAppointment = async () => {
        const appointment = await addAppointment(appointmentDentist,appDate,token)
        if (appointment) {
            alert('Appointment booked successfully')
        } else {
            alert('Appointment booking failed')
        }
    }
    
    return (
        <main className="w-[100%] flex flex-col items-center space-y-4 mt-20">

            <div className="text-[36px] font-medium text-[#008DDA] mb-10 mt-10">Vaccine Appointment</div>   

            

            <div className="w-fit space-y-2 text-[#008DDA] text-lg font-bold">
                <div className="text-md text-left">Choose your Appointment date and Dentist</div>
                <DateReserve onDateChange={(value:Dayjs)=>{setAppointmentDate(value)}} onHospitalChange={(value:string)=>setAppointmentDentist(value)}/>
            </div>
            
            
                <button className="block rounded-md bg-[#008DDA] hover:bg-indigo-500 px-5 py-4 shadow-sm text-xl text-bold" name="Add Appointment"
                onClick={makingAppointment}>
                    Add Appointment
                </button>

        </main>
    );
}