import Image from 'next/image'
import React from 'react'

const TechStack = () => {
  return (
    <div className='flex items-center justify-center md:mt-20 flex-wrap mt-72'>
        <h2 className='text-[20px] font-bold text-gray-600'>Tech Stack </h2>
        <span className='text-[30px] text-gray-600 ml-14'>|</span>
        <ul className='flex items-center ml-10 max-md:justify-center flex-wrap'>
        <Image src={'/icons.svg'} alt='html and css' width={135} height={135}  className='px-5 py-3'/>
          <Image src={'/icons (1).svg'} alt='html and css' width={135} height={135} className='px-5 py-3'/>
          <Image src={'/icons (2).svg'} alt='html and css' width={135} height={135} className='px-5 py-3'/>
          <Image src={'/icons (3).svg'} alt='html and css' width={135} height={135} className='px-5 py-3'/>
        </ul>
    </div>
  )
}

export default TechStack
