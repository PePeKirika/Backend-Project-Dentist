import Image from 'next/image'
import TopMenuItem from './TopMenuItem'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/app/api/auth/[...nextauth]/route'
import Link from 'next/link'

export default async function TopMenu() {

  const session = await getServerSession(authOptions)

  return (
    <div className="h-[50px] top-0 left-0 right-0 z-30 fixed flex-grow flex flex-row-reverse border-y-[1px] border-y-gray-300 bg-black">
        <Image src={'/img/logo.png'} className="h-[100%] w-auto" alt='logo' width={0} height={0} sizes='100vh'/>
        <TopMenuItem title='Bookings' pageRef='/booking'/>
        <div className='flex flex-row absolute left-0 h-full'>
        {
          session ? <div className='flex flex-row'>
              <Link href="/api/auth/signout" className='w-[120px] my-auto'>
            <div className="px-2 text-[10pt] font-serif text-cyan-600">Sign-Out of {session.user?.name}</div>
          </Link> 
          <Link href="/myaccount" className='w-[120px] my-auto'>
            <div className="px-2 text-[10pt] font-serif text-cyan-600">My Account</div>
          </Link> 
            </div>
          : <Link href="/api/auth/signin" className='w-[120px] my-auto'>
            <div className="px-2 text-[10pt] font-serif text-cyan-600">Sign-in</div>
          </Link>
        }
        <Link href="/mybooking" className='w-[120px] my-auto px-2 text-[10pt] font-serif text-white'>
            My Booking
          </Link>
        </div>
        
    </div>
  )
}