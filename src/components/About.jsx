import Image from 'next/image'
import React from 'react'

const About = () => {
  return (
    <div className='flex items-center justify-center gap-24 flex-wrap max-sm:px-10' id='about'>
            <Image src={'/about.webp'} alt='about' width={450} height={450} style={{
                borderRadius: 40
            }}/>
        <div  className='w-[500px]'>
        <h1 className='text-blue-500 text-[20px] font-bold'>ABOUT ME</h1>
        <h2 className='text-gray-800 font-bold text-[35px]'>Front-end Developer
        based in Bangladesh 📍</h2>
        <p className='text-gray-600 text-[16px]'>
        Hey, my name is Tasin, and I'm a Frontend Developer. My passion is to create and develop a clean UI/UX for my users.
        </p>
        <p className='text-gray-600 text-[16px]'>
        My main stack currently is React/Next.js in combination with Tailwind CSS and TypeScript.
        </p>

        </div>
    </div>
  )
}

export default About
