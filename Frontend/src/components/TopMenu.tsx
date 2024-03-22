import Image from 'next/image'
import TopMenuItem from './TopMenuItem'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/app/api/auth/[...nextauth]/route'
import getUserProfile from '@/libs/getUserProfile'
import Link from 'next/link'

export default async function TopMenu() {

  const session = await getServerSession(authOptions)
  const profile = session ? await getUserProfile(session.user.token) : null

  return (
    <div className="h-[64px] top-0 left-0 right-0 z-30 fixed flex flex-row
    border-y-gray-300 bg-black shadow-lg text-[20px]"
    style={{ backgroundColor: 'rgb(0, 141, 218)' }}>
        <Link href=".">
          <Image src={'/img/logo.png'} className="h-[100%] w-auto p-1" alt='logo' width={0} height={0} sizes='100vh'/>
        </Link>
        <TopMenuItem title='Bookings' pageRef='/booking'/>
        <div className='flex flex-row-reverse absolute right-0 h-full ml-5 space-x-5'>
        {
          session ? <div className='flex flex-row-reverse space-x-5'>
              <Link href="/api/auth/signout" className='my-auto'>
            <div className="px-2 text-white">Sign-Out of {profile.data.name}</div>
          </Link> 
          <Link href="/myaccount" className='my-auto'>
            <div className="px-2 text-white">My Account</div>
          </Link> 
            </div>
          : <Link href="/api/auth/signin" className='my-auto'>
            <div className="px-2 text-white">Sign-in</div>
          </Link>
        }
        <Link href="/mybooking" className='w-fit my-auto px-2 text-white'>
            My Booking
          </Link>
        </div>
        
    </div>
  )
}