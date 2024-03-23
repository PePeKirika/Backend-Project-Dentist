'use client'
import { AppDispatch, useAppSelector } from "@/redux/store"
import { useDispatch } from "react-redux"
import { removeAppointment } from "@/redux/features/appointmentSlice"
import { use, useEffect } from "react"
import { getServerSession } from "next-auth"
import { authOptions } from "@/app/api/auth/[...nextauth]/route"
import getUserProfile from "@/libs/getUserProfile"

export default function AppointmentList() {
    const appointmentItems = useAppSelector((state) => state.appointmentSlice.appointmentItems)
    const dispatch = useDispatch<AppDispatch>()

    var profile = null;

    useEffect(()=>{
        const fetchData = async () => {
            const session = await getServerSession(authOptions)
            if (!session || !session.user.token) return null
            profile = await getUserProfile(session.user.token)
        }
        fetchData()
    }, [])

    return (
        <div>
            { appointmentItems.length > 0 ? (
                appointmentItems.map((appointmentItem) => (
                    <div className="bg-slate-400 rounded-lg mx-5 my-2 px-10 py-5 text-black space-y-5" key={appointmentItem.user}>
                        <div className="text-2xl">{appointmentItem.userName}</div>
                        <div className="text-xl">Dentist: {appointmentItem.dentist}</div>
                        <div className="text-xl">Date: {appointmentItem.appDate}</div>
                        <button className="block rounded-md bg-sky-600 hover:bg-indigo-600 px-3 py-2 shadow-sm text-white" name="Book Vaccine" 
                        onClick={() => dispatch(removeAppointment(appointmentItem.user))}>
                            Cancel Booking
                        </button>
                    </div>
                ))
            ) : (
                <div className="text-center text-4xl my-5">No Vaccine Booking</div>
            )}
        </div>
    )
}