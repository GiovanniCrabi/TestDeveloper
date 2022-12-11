import { ArrowCircleLeft, ArrowCircleRight, Circle } from "phosphor-react";
import { Button } from "../components/Button";


export function Section4() {
  return (
    <div className='h-[54rem] w-full bg-[url("/image4.jpg")] bg-cover bg-no-repeat bg-bottom  relative x-sm:mt-24'>
        <div
          className='absolute h-full w-full'
          style={{
            backgroundImage: "linear-gradient(38.77deg, #1F376A 28.03%, rgba(31, 55, 106, 0) 77.19%)",
          }}
        >
          <div className='x-sm:px-5 flex flex-col items-center text-center md:mt-64 x-sm:mt-24'>
            <h1 className='md:text-base x-sm:text-sm text-yellow-500 uppercase tracking-widest'>The Global Challenge</h1>
            <h1 className='md:w-[60rem] text-white md:text-5xl x-sm:text-3xl md:leading-[4rem] x-sm:leading-10 mt-5'>Climate change and the pressures on global energy resources are urgent problems.</h1>
            <p className='md:w-[42rem] font-normal text-base leading-8 mt-5 opacity-80 text-white'>The UK has set out an ambitious national clean energy policy – Net Zero – to fully decarbonise the economy by 2050. This future energy scenario requires clean and sustainable energy generation from renewable sources.</p>

            <div className='md:mt-12 x-sm:mt-10'>
              <Button
                title='Business Plan'
              />
            </div>

            <div className='flex items-center justify-center mt-32 space-x-2.5'>
              <ArrowCircleLeft size={36} weight='thin' className=' text-white' />
              <div className='flex space-x-1'>
                <Circle size={12} className='text-white' />
                <Circle size={12} className='text-white' />
                <Circle size={12} className='text-white' />
                <Circle size={12} className='text-white' />
                <Circle size={12} className='text-white' />
                <Circle size={12} className='text-white' />
              </div>
              <ArrowCircleRight size={36} weight='thin' className=' text-white' />
            </div>
          </div>
        </div>
      </div>
  )
}