import Image from 'next/image'
import Banner from '@/components/Banner'
import Card from '@/components/Card'
import styles from './page.module.css'
import CardPanel from '@/components/CardPanel'
import PromoteCard from '@/components/PromoteCard'

export default function Home() {
  return (
    <main>
      <Banner />
      <PromoteCard />
    </main>
  )
}
