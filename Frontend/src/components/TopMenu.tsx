import Image from 'next/image'
import TopMenuItem from './TopMenuItem'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/app/api/auth/[...nextauth]/route'
import getUserProfile from '@/libs/getUserProfile'
import Link from 'next/link'
import { Button } from '@mui/material'

export default async function TopMenu() {

  const session = await getServerSession(authOptions)
  const profile = session ? await getUserProfile(session.user.token) : null

  return (
    <div className="h-[64px] top-0 left-0 right-0 z-30 px-10 fixed flex flex-row justify-between items-center shadow-lg "
    style={{ backgroundColor: 'rgb(65, 201, 226)' }}>

      <div>
        <a href="/">
        <img src={'/img/logo.png'} alt='logo' className="h-[28px] mx-2.5 my-4"  />
        </a>
        </div>

      <div className="flex items-center gap-4">
        <TopMenuItem title='appointment' pageRef='/appointment'/>
        <TopMenuItem title='Booking' pageRef='/makeappointment'/>
        <TopMenuItem title='myaccount' pageRef='/myaccount'></TopMenuItem>

      </div>
      
      <div>
        <Button className='group flex items-center gap-2 rounded-2xl hover:text-primary-default hover:bg-cyan-500 py-2 outline-none text-high'>
          <img src={'/img/profilelogo.png'} alt="logoprofile" className="w-8 h-8 group-hover:border group-hover:border-primary-default 
          group-hover:shadow-primary rounded-full object-cover border-default shadow-default" />
          <p className='text-white'>Profile</p>
        </Button>
      </div>

{/*       
        <Link href="." className='mr-5'>
          <Image src={'/img/logo.png'} className="h-[100%] w-auto p-1" alt='logo' width={0} height={0} sizes='100vh' />
        </Link>
        <Link href="/appointment" className='w-fit my-auto px-2 text-white'>
            My Appointment
        </Link>
        <div className='flex flex-row-reverse absolute right-0 h-full mr-5 space-x-5'>
        {
          session ? <div className='flex flex-row-reverse space-x-5'>
              <Link href="/api/auth/signout" className='my-auto'>
               <div className="px-2 text-white">Sign-Out of {profile.data.name}</div>
              </Link> 
              <Link href="/myaccount" className='my-auto'>
                <div className="px-2 text-white">My Account</div>
              </Link> 
              </div>
          : <div className='flex flex-row-reverse space-x-5'>
            <Link href="/api/auth/signin" className='my-auto'>
              <div className="px-2 text-white">Sign-in</div>
            </Link>
            <Link href="/api/auth/register" className='my-auto'>
              <div className="px-2 text-white">Register</div>
            </Link>
          </div>
        }
        
        </div>
         */}
        
    </div>
  )
}