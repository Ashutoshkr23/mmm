import React from 'react'

interface LearnProps{
    text: string;
}
const Learn = ({text} : LearnProps) => {

  return (
    <div className='w-[500px] h-16 bg-Dark-blue rounded-xl flex items-center justify-center'>
        <h1 className='text-4xl'>{text}</h1>
    </div>
  )
}

export default Learn
