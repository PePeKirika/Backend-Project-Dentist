'use client'
import { useSession } from 'next-auth/react'
import deleteAppointment from '@/libs/deleteAppointment';
import { useRouter } from 'next/navigation';

export default function CancelAppointment({appointmentID} : {appointmentID: string}) {

    const { data: session } = useSession();

    const token = session?.user.token;
    if (!token) return null;

    const router = useRouter();

    const cancelAppointment = async () => {
        await deleteAppointment(appointmentID,token);
        router.push('/appointment');
      }

    return (
        <button className="block rounded-md bg-sky-600 hover:bg-indigo-600 px-3 py-2 shadow-sm text-white"
        name="Book Vaccine" onClick={cancelAppointment}>
            Cancel Appointment
        </button>
    )
}