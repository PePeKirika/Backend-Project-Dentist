import AppointmentList from "@/components/AppointmentList";
import getAppointment from "@/libs/getAppointments";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";

export default async function MyAppointment() {
  const session = await getServerSession(authOptions);

  if (!session || !session.user.token) return null;

  const appointment = getAppointment(session.user.token);

  return (
    <main className="mt-10">
      <AppointmentList appointmentJson={appointment} />
    </main>
  );
}
