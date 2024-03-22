'use client'
import { AppDispatch, useAppSelector } from "@/redux/store"
import { useDispatch } from "react-redux"
import { removeBooking } from "@/redux/features/bookSlice"
import { use, useEffect } from "react"
import { getServerSession } from "next-auth"
import { authOptions } from "@/app/api/auth/[...nextauth]/route"
import getUserProfile from "@/libs/getUserProfile"

export default function BookingList() {
    const bookItems = useAppSelector((state) => state.bookSlice.bookItems)
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
            { bookItems.length > 0 ? (
                bookItems.map((bookingItem) => (
                    <div className="bg-slate-400 rounded-lg mx-5 my-2 px-10 py-5 text-black space-y-5" key={bookingItem.user}>
                        {/* <div className="text-2xl">{bookingItem.name} {bookingItem.surname}</div>
                        <div className="text-xl">Citizen ID: {bookingItem.id}</div>
                        <div className="text-xl">At {bookingItem.hospital}</div>
                        <div className="text-xl">Date: {bookingItem.bookDate}</div> */}
                        <button className="block rounded-md bg-sky-600 hover:bg-indigo-600 px-3 py-2 shadow-sm text-white" name="Book Vaccine" 
                        onClick={() => dispatch(removeBooking(bookingItem.user))}>
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