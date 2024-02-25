import React from 'react'
import Button from '@/components/ui/Button'

const page = () => {
  return (
    <div className='bg-gradient-to-b from-White to-light-blue py-20 w-full min-h-screen'>
      <h1 className='text-Black text-6xl text-center '> Choose Level</h1>
      <Button 
      href="/home/learn/addition/level"
      customCSS="h-10 w-40 bg-orange mt-10"
      text="Level 1"
      />
    </div>
  )
}

export default page
