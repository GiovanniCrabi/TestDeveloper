import { ArrowCircleDown } from "phosphor-react";
import { Header } from "../components/Header";

import image2 from '../assets/image-2.png';


export function Section1() {
  return (
    <div
      className="bg-[length:100vw_100vh] bg-bottom bg-no-repeat bg-[url('./assets/image-1.png')] relative"
    >
      <div
        className="h-screen  bg-gradient-to-tr from-blue.background"
      >
        <img src={image2} className=' x-sm:invisible  md:visible w-screen max-h-[100%] opacity-20 absolute' />
        <Header />

        <div className='w-full flex flex-col items-center text-center'>
          <div className='x-sm:w-80 md:w-full'>
            <h1 className='text-white x-sm:text-5xl md:text-8xl font-normal mt-20 z-50'>Welcome to StarForm</h1>
            <p className='text-white x-sm:text-lg md:text-xl mt-3 z-50'>Helping nations achieve <span className='text-transparent bg-clip-text bg-yellow.100'>Lower emissions with Star-Based Solar Technology </span></p>
          </div>

          <ArrowCircleDown className='text-white text-3xl mt-40' />
        </div>
      </div>
    </div>
  )
}