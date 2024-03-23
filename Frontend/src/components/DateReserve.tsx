'use client'
import { DatePicker } from "@mui/x-date-pickers"
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider"
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs"
import { Select, MenuItem } from "@mui/material"
import { useState } from "react"
import { Dayjs } from "dayjs"

export default function DateReserve({onDateChange, onHospitalChange} : {onDateChange:Function, onHospitalChange:Function}) {

    const [reserveDate, setReserveDate] = useState<Dayjs|null>(null)
    const [hospital, setHospital] = useState<string>("")

    return (
        <div className="rounded-lg space-x-5 space-y-2 w-[100%] px-10 py-5 flex flex-row justify-center">
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker className=""
                value={reserveDate}
                onChange={(value) => {setReserveDate(value); onDateChange(value)}}
                />
            </LocalizationProvider>

            <Select variant="standard" name="location" id="hospital" value={hospital} className="h2-[2em] w-[200px]" onChange={(e) => {setHospital(e.target.value); onHospitalChange(e.target.value)}}>
                <MenuItem value="65fc87aec9158cef4a0e1725">Chulalongkorn Hospital</MenuItem>
                <MenuItem value="Rajavithi Hospital">Rajavithi Hospital</MenuItem>
                <MenuItem value="Thammasat University Hospital">Thammasat University Hospital</MenuItem>
            </Select>
        </div>
    )
}