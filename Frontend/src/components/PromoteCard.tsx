'use client'
import VideoPlayer from "./VideoPlayer"
import { useState } from "react"
import useWindowListener from "@/hooks/useWindowListener"

export default function PromoteCard() {

    const [playing, setPlaying] = useState(true)
    const [pointerPosition, setPointerPosition] = useState({x:0, y:0})

    useWindowListener("contextmenu", (e) => {e.preventDefault()})

  return (
    <div className="w-[80%] shadow-lg mx-[10%] my-10 p-2 rounded-lg bg-gray-200 flex flex-row ">
        <VideoPlayer vdoSrc="/vdo/getvaccine.mp4" isPlaying={playing}></VideoPlayer>
        <div className="m-5 flex flex-col">
          <div className="text-black">Get your vaccine today.</div>
            <button className="block mt-auto w-[50%] rounded-md bg-sky-600 hover:bg-indigo-600 px-3 py-2 shadow-sm text-white" 
            onClick={() => { setPlaying(!playing)}}> {playing? 'Pause':'Play'} </button>
       </div>
    </div>
  )
}