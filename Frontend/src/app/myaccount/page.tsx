import DateReserve from "@/components/DateReserve";
import { TextField } from "@mui/material";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import getUserProfile from "@/libs/getUserProfile";
import { useState } from "react";
import dayjs, { Dayjs } from "dayjs";
import { useDispatch } from "react-redux";

export default async function MyAccount() {
  const session = await getServerSession(authOptions);

  if (!session || !session.user.token) return null;

  const profile = await getUserProfile(session.user.token);
  var createdAt = new Date(profile.data.createdAt);

  return (
    <main className="mt-16">
      <div className="text-[36px] text-center text-[#008DDA] mb-10">
        My Account
      </div>
      <div className="bg-slate-200 text-black m-5 p-1 rounded-lg w-fit mx-auto">
        <table className="table-auto bg-slate-100 rounded-lg border-separate border-spacing-5 border-spacing-x-5 p-10 mx-auto text-[20px] ">
          <tbody>
            <tr>
              <td className="font-semibold">Name</td>
              <td>{profile.data.name}</td>
            </tr>
            <tr>
              <td className="font-semibold">Email</td>
              <td>{profile.data.email}</td>
            </tr>
            <tr>
              <td className="font-semibold">Tel.</td>
              <td>{profile.data.tel}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </main>
  );
}
