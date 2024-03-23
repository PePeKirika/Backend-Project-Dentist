'use client'
import DateReserve from "@/components/DateReserve";
import { TextField } from "@mui/material";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import getUserProfile from "@/libs/getUserProfile";
import { useState,useEffect } from "react";
import dayjs, { Dayjs } from "dayjs";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux/store";
import { addAppointment } from "@/redux/features/appointmentSlice";

export default function Appointment() {

    const [userID, setUserID] = useState<string>("")
    const [userName, setUserName] = useState<string>("")
    const [appointmentDate, setAppointmentDate] = useState<Dayjs|null>(null)
    const [appointmentDentist, setAppointmentDentist] = useState<string>("")

    const dispatch = useDispatch<AppDispatch>()

    useEffect(()=>{
        const fetchData = async () => {
            const session = await getServerSession(authOptions)
            if (!session || !session.user.token) return null
            const profile = await getUserProfile(session.user.token)
            setUserID(profile.data._id)
            setUserName(profile.data.name)
        }
        fetchData()
    }, [])

    const makeAppointment = () => {
        if (userID && appointmentDate && appointmentDentist) {
            const item:AppointmentItem = {
                appDate : dayjs(appointmentDate).format('YYYY/MM/DD'),
                user : userID,
                userName : userName,
                dentist : appointmentDentist,
                createAt : dayjs().format('YYYY/MM/DD')
            }
            dispatch(addAppointment(item))
        }
    }

    if (!userID || !userName) return (<p>Loading...</p>)

    return (
        <main className="w-[100%] flex flex-col items-center space-y-4 mt-20">

            <div className="text-[36px] font-medium text-[#008DDA] mb-10 mt-10">Vaccine Appointment</div>   

            

            <div className="w-fit space-y-2 text-[#008DDA] text-lg font-bold">
                <div className="text-md text-left">Choose your Appointment date and Dentist</div>
                <DateReserve onDateChange={(value:Dayjs)=>{setAppointmentDate(value)}} onHospitalChange={(value:string)=>setAppointmentDentist(value)}/>
            </div>
            
            <button className="block rounded-md bg-[#008DDA] hover:bg-indigo-500 px-5 py-4 shadow-sm text-xl text-bold" name="Book Dentist"
            onClick={makeAppointment}>Book Dentist</button>
        </main>
    );
}