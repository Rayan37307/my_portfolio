import Image from "next/image";
import Spline from '@splinetool/react-spline/next';
import React from 'react';


const Hero = () => {
  return (
    <div className='h-[70vh] flex items-center justify-center md:gap-24 gap-10 flex-wrap max-sm:px-10' id="home">
        <div>
            <h1
                className='text-[50px] font-bold text-[#2d2e32]'
                >
                Front-End React <br />
                Developer 👋🏼
            </h1>
            <p className="text-[15px] text-gray-500 mt-10">
                Hi I'm Tasin Bin tarek . A passionate Front-end React <br /> Developer Based in Bangladesh 📍
            </p>
            <div className="mt-10 flex gap-10">
                <Image src={'/github.png'} alt="github" width={30} height={30} />
                <Image src={'/linkedin.png'} alt="github" width={30} height={30} />
            </div>
        </div>
        <div className=" items-center justify-center md:flex max-md:hidden">
            <iframe src="https://lottie.host/embed/522ecc93-6ed1-4666-a114-0d9408f1061f/RHPMgn1SE4.json" width={500} height={500} />
        </div>
        <div className="items-center justify-center md:hidden max-md:flex max-sm:hidden">
            <iframe src="https://lottie.host/embed/522ecc93-6ed1-4666-a114-0d9408f1061f/RHPMgn1SE4.json" width={450} height={450} />
        </div>
        <div className="items-center justify-center sm:hidden max-sm:flex">
            <iframe src="https://lottie.host/embed/522ecc93-6ed1-4666-a114-0d9408f1061f/RHPMgn1SE4.json" width={400} height= {400} />
        </div>

    </div>
  )
}

export default Hero
