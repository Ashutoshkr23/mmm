import Link from 'next/link';
import React from 'react'

interface LearnProps{
    text: string;
    link: string;
}
const Learn = ({text , link} : LearnProps) => {

  return (
    <div className='w-[500px] h-16 cursor-pointer bg-Dark-blue hover:bg-light-blue hover:border-Dark-blue hover:border-2 rounded-xl flex items-center justify-center'>
        <Link href={`/home/learn/${link}`}>
        <h1 className='text-4xl w-full h-full flex hover:text-Dark-blue justify-center items-center'>{text}</h1>
        </Link>
       
    </div>
  )
}

export default Learn
