import Image from 'next/image'
import { Inter } from 'next/font/google'
import Header from '@/components/Header'
// import Footer from '@/components/Footer'
import Jokes from '@/components/Jokes'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (<div className={`flex flex-col min-h-screen ${inter.className}`}>
  <Header/>
  <main className="flex flex-grow">
     <Jokes/>
  </main>
  {/* <Footer/> */}
</div>)
}
