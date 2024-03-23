import Link from 'next/link'

export default function TopMenuItem({title,pageRef}:{title:string,pageRef:string}) {
  return (
    <Link href={pageRef} className='w-[120px] text-center mt-auto 
    mb-auto text-white text-[20px] '>
        {title}
    </Link>
  )
}