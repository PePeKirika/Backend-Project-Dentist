'use client'
import Image from 'next/image'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useSession } from 'next-auth/react'

export default function Banner() {
  const covers =['/img/cover.jpg','/img/cover2.jpg','/img/cover3.jpg','/img/cover4.jpg']
  const [index, setIndex] = useState(0)

  const router = useRouter()

  const { data: session } = useSession()
  console.log(session?.user?.email)
  
  return (
    <div className="block p-5 m-0 w-screen h-[80vh] relative" onClick={()=>{setIndex(index+1) }}>
        <Image src={covers[index % covers.length]} 
        alt='cover'
        fill={true}
        priority={true}
        className='object-cover'
        />
        <div className="text-black relative top-[100px] z-20 text-center">
            <h1 className='text-5xl font-bold'>Vaccine Service Center</h1>
            <h3 className='text-3xl font-serif'>
                Empower your immunity, safeguard your loved ones. Our vaccine service delivers peace of mind, one dose at a time. 
            </h3>
            <h3 className='text-3xl font-serif'>
                Because a healthier tomorrow begins with the choices we make today.
            </h3>
        </div>

        {
            session? <div className='z-30 absolute top-5 right-10 font-semibold text-cyan-800 text-xl'>Welcome {session.user?.name}</div> : null
        }

        <button className='bg-blue-500 text-white font-semibold py-2 px-2 m-2 mx-6 rounded z-30 absolute bottom-0 right-0 
        hover:bg-white hover:text-blue-500 '
            onClick={(e)=>{e.stopPropagation(); router.push('/dentist');}}>
            Select Dentist
        </button>
    </div>
  )
}