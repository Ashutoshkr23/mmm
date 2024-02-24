import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Hero = () => {
  return (
    <div className='bg-gradient-to-b from-white to-light-blue  w-full h-screen'>
        <div className='flex items-center text-black justify-around h-screen mx-auto max-w-[1180px]'>
            <div className='w-1/2 flex flex-col gap-6'>
                <h1 className='text-6xl font-bold'>Unlock Your Mental Math Potential</h1>
                <p className='text-2xl '>Unleash your math mastery with Math Mastermind! Whether you&apos;re boosting calculation speed, refining number sense, or sharpening problem-solving skills, our platform offers tailored resources and games. Join us on your journey to mental math mastery today</p>
                <Link href="/" className=' h-10 bg-orange px-10 w-40 py-2 rounded-2xl'>Try it now</Link>
            </div>
            <div>
                <Image 
                src="/assets/landing-page/hero.png"
                alt='hero-image'
                height={441}
                width={500}
                />
            </div>
        </div>
    </div>
  )
}

export default Hero
