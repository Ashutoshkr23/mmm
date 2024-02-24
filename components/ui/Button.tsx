import React from 'react'
import Link from 'next/link'

interface ButtonProps{
    href: string;
    customCSS: string;
    text: string;
}

const Button = ({href , customCSS , text } : ButtonProps) => {
  return (
    <Link href={href}>
    <button className={`${customCSS} h-10  px-10 w-40 py-2 rounded-2xl mx-auto flex justify-center items-center`}>
        <p className='text-Black'> {text}</p>
    </button> 
    </Link>
  )
}

export default Button
