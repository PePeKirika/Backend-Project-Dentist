export default async function AppointmentList({
  appointmentJson,
}: {
  appointmentJson: Promise<AppointmentJson>;
}) {
  const appointmentJsonReady = await appointmentJson;

  return (
    <div>
      {appointmentJsonReady.data.map((appointmentItem) => (
        <div
          className="bg-slate-400 rounded-lg mx-5 my-2 px-10 py-5 text-black space-y-5"
          key={appointmentItem._id}
        >
          <div className="text-2xl text">{appointmentItem.userName}</div>
          <div className="text-xl">Dentist: {appointmentItem.dentist.name}</div>
          <div className="text-xl">
            Date: {new Date(appointmentItem.appDate).toLocaleDateString()}
          </div>
          <button
            className="block rounded-md bg-sky-600 hover:bg-indigo-600 px-3 py-2 shadow-sm text-white"
            name="Book Vaccine"
          >
            Cancel Booking
          </button>
        </div>
      ))}
    </div>
  );
}
