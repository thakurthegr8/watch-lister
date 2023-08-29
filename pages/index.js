import Image from 'next/image'
import Navbar from '@/src/components/sections/navbar/Navbar'

export default function Home() {
  return (
    <div className='page'>
      <div className='wrapper'>
        <Navbar/>
      </div>
    </div>
  )
}
