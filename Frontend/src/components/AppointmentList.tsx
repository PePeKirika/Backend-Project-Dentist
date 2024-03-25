import Link from "next/link";

export default async function AppointmentList({
  appointmentJson,
}: {
  appointmentJson: Promise<AppointmentJson>;
}) {
  const appointmentJsonReady = await appointmentJson;

  return (
    <div className="">
      {appointmentJsonReady.data.map((appointmentItem) => (
        <Link href={`/appointment/${appointmentItem._id}`} className="">
          <div
            className="bg-slate-200 font-mono w-[512px] font-bold rounded-lg mx-auto my-2 px-10 py-10 text-black space-y-5 text-center hover:bg-slate-300 relative"
            key={appointmentItem._id}
          >
            <div className="text-2xl text-slate-800">
              {new Date(appointmentItem.appDate).toLocaleDateString()}
            </div>
            <div className="text-xl text-slate-700 absolute top-0 left-0 pl-5">
              {appointmentItem.userName}
            </div>
            <div className="text-xl text-slate-700">
              Doctor {appointmentItem.dentist.name}
            </div>
            <div className="text-sm text-slate-400 font-normal">
              (click to see more infomation)
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
