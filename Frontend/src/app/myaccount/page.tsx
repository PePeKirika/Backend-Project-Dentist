import DateReserve from "@/components/DateReserve";
import { TextField } from "@mui/material";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import getUserProfile from "@/libs/getUserProfile";
import { useState } from "react";
import dayjs, { Dayjs } from "dayjs";
import { useDispatch } from "react-redux";

export default async function MyAccount() {
    const session = await getServerSession(authOptions)

    if (!session || !session.user.token) return null

    const profile = await getUserProfile(session.user.token)
    var createdAt = new Date(profile.data.createdAt)

    return (
        <main className="mt-16">
            <div className="text-[36px] text-semibold text-center text-[#008DDA] mb-10">My Account</div>
            <div className="bg-slate-300 text-black text-semibold m-5 p-5 rounded-lg w-fit mx-auto">
                <div className="text-[36px] text-bold text-center w-fit mb-3 ml-2">{profile.data.name}</div>
                <table className="table-auto bg-slate-200 rounded-lg border-separate border-spacing-5 border-spacing-x-5 p-2 mx-auto text-[20px]">
                    <tbody>
                        <tr>
                            <td>Email</td>
                            <td>{profile.data.email}</td>
                        </tr>
                        <tr>
                            <td>Tel.</td>
                            <td>{profile.data.tel}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </main>
    )
}