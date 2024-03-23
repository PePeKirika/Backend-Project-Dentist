import Link from 'next/link'

export default function TopMenuItem({title,pageRef}:{title:string,pageRef:string}) {
  return (
    <Link href={pageRef} className='w-24 text-center py-2 px-4 text-white text-lg font-sans hover:bg-gray-800 hover:text-gray-300 transition duration-300'>
        {title}
    </Link>
  )
}