'use client'
import { TextField } from "@mui/material";
import { useState } from "react";
import { useRouter } from "next/navigation";
import userRegister  from "@/libs/userRegister";

export default function Booking() {

    const [name, setName] = useState<string>("")
    const [email, setEmail] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    const [tel, setTel] = useState<string>("")

    const router = useRouter()

    const register = async () => {
        if (!name || !email || !password || !tel) {
            alert("Please fill in all the fields")
            return
        }
       
       try {
        const newUser = await userRegister(name, email, password, tel)
        if (newUser) {
            router.push("/api/auth/signin")
        } else {
            alert("Failed to register")
        }
       } catch (error) {
            alert("Failed to register")
       }
    }

    return (
        <main className="w-[100%] flex flex-col items-center space-y-4">
           
            <div className="text-xl font-medium">Vaccine Booking</div>   

            

            <div className="w-fit space-y-2">
                <div className="text-md text-left text-gray-200">Enter your Name</div>
                <div className="w-[100%] bg-slate-400 rounded-lg space-x-5 space-y-2 px-10 py-5 text-black">
                    <TextField fullWidth name="Name" label="Name" variant="standard" value={name} onChange={(e)=>{setName(e.target.value)}}/>
                </div>

                <div className="text-md text-left text-gray-200">Enter your Email</div>
                <div className="w-[100%] bg-slate-400 rounded-lg space-x-5 space-y-2 px-10 py-5 text-black">
                    <TextField fullWidth name="Email" label="Email" variant="standard" value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
                </div>

                <div className="text-md text-left text-gray-200">Set your Password</div>
                <div className="w-[100%] bg-slate-400 rounded-lg space-x-5 space-y-2 px-10 py-5 text-black">
                    <TextField fullWidth name="Password" label="Password" variant="standard" value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
                </div>
                
                <div className="text-md text-left text-gray-200">Enter your Telephone Number</div>
                <div className="w-[100%] bg-slate-400 rounded-lg space-x-5 space-y-2 px-10 py-5 text-black">
                    <TextField fullWidth name="Tel" label="Tel" variant="standard" value={tel} onChange={(e)=>{setTel(e.target.value)}}/>
                </div>
            </div>
            
            <button className="block rounded-md bg-sky-600 hover:bg-indigo-600 px-3 py-2 shadow-sm" name="Book Vaccine"
            onClick={register}>Register</button>
        </main>
    );
}