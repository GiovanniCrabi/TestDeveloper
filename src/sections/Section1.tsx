import { ArrowCircleDown } from "phosphor-react";
import { Header } from "../components/Header";

import image1 from '../assets/image-1.png';
import image2 from '../assets/image-2.png';
import { useEffect, useState } from "react";
import { Button } from "../components/Button";

export function Section1() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="w-full md:h-[69rem] x-sm:h-screen  relative">
        <img src={image1} className='w-full h-full bg-bottom bg-cover bg-no-repeat absolute' />

        <img
          src={image2} className=' x-sm:invisible  md:visible w-full h-full bg-bottom bg-cover bg-no-repeat opacity-20 absolute'
        />
        <div
          className='w-full h-full absolute'
          style={{
            backgroundImage: 'linear-gradient(180deg, rgba(19, 34, 55, 0) -26.46%, #132237 100%)'
          }}
        >
          <Header />

          <div className='w-full flex flex-col items-center text-center absolute'>
            <div className='x-sm:w-80 md:w-full'>
              <h1  className='text-white x-sm:text-5xl md:text-8xl font-normal md:mt-[22rem] x-sm:mt-44'>Welcome to StarForm</h1>
              <p className='text-white x-sm:text-lg md:text-xl mt-3 z-50'>Helping nations achieve <span className='text-transparent bg-clip-text bg-yellow.100'>Lower emissions with Star-Based Solar Technology </span></p>
            </div>

            <a className='text-white text-3xl md:mt-52 x-sm:mt-48' >
              <ArrowCircleDown
                weight="thin"
                onClick={() => setOpen(!open)}
                className={`cursor-pointer ${!open ? 'animate-bounce w-9 h-9' : ''}`} />
            </a>
          </div>
        </div>
      </div>

      <div className={`${open ? 'visible' : 'hidden'}`}>
        <div className='md:flex x-sm:flex-row x-sm:px-6 x-sm:justify-center '>
          <div className='x-sm:w-full md:w-[23rem] md:mt-4 '>
            <h1 className='text-base text-yellow-500 uppercase tracking-widest'>Our mission</h1>
          </div>

          <div className='x-sm:w-full md:w-[45rem] x-sm:mt-3'>
            <h1 className='text-white x-sm:text-2xl md:text-4xl text-left '> Climate change and the pressures on global energy resources are urgent problems. The UK has set out an ambitious national clean energy policy to fully decarbonise the economy by 2050. </h1>
            <div className='x-sm:mt-10 md:mt-16'>
              <Button
                title='Business Plan'
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}