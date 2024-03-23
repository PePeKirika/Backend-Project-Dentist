'use client'
import Image from 'next/image'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useSession } from 'next-auth/react'

export default function Banner() {
//   const covers =['/img/cover.jpg','/img/cover2.jpg','/img/cover3.jpg','/img/cover4.jpg']
//   const [index, setIndex] = useState(0)

  const router = useRouter()

  const { data: session } = useSession()
  console.log(session?.user?.email)
  
  return (
    <div className="p-5 m-0 w-screen h-[80vh] relative flex flex-row items-center justify-center"
    style={{ backgroundColor: 'rgb(247, 238, 221)' }}>
        <div className="text-black text-left max-w-md mx-20 z-20 font-mono">
            <h1 className='text-5xl font-bold text-amber-500'>Vaccine Service Center</h1>
            <h3 className='text-2xl font-sans my-5'>
                Empower your immunity, safeguard your loved ones. Our vaccine service delivers peace of mind, one dose at a time. 
            </h3>
            {
                session && <div className='font-semibold text-cyan-800 text-xl'>Welcome {session.user?.name}</div>
            }
            <button className='bg-blue-500 text-white font-semibold py-2 px-2 my-8 rounded hover:bg-blue-400   hover:text-blue-500'
                onClick={(e)=>{e.stopPropagation(); router.push('/dentist');}}>
                Booking Now
            </button>   
        </div>

        <div className='flex-grow'>
            <Image src='/img/cover2.jpg'  alt='cover' width={1000} height={1000}/>
        </div>
        {/* <div className="flex-grow">
            <Image src='/img/cover.jpg' 
            alt='cover'
            fill = {true}
            
            priority={true}
            className='max-w-full'
            />
        </div> */}
    </div>
  )
}
