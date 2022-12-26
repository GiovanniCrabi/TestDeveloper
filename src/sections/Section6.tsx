import image5 from '../assets/image-5.png'
import { Button } from '../components/Button'

export function Section6() {
  return (
    <div className="w-full h-[39rem] md:mt-32 x-sm:mt-20  relative">
      <img src={image5} className='className="w-full h-full bg-cover bg-no-repeat absolute' />

      <div
        className='w-full h-full absolute'
        style={{
          backgroundImage: 'linear-gradient(359.29deg, #1F376A 0.62%, rgba(31, 55, 106, 0.4) 99.39%)'
        }}
      >
        <div className='flex flex-col justify-center items-center text-center mt-48'>
          <h1 className='font-medium md:text-base x-sm:text-sm text-yellow-500 uppercase tracking-[0.3em]'>Get in touch</h1>
          <h2 className='md:w-[50rem] font-normal text-white leading-[4rem] tracking-[-0.02em] md:text-5xl x-sm:text-3xl mt-5 px-6'>Help us get one step closer to Net Zero Star-Based Solar Power.</h2>

          <div className='md:mt-20 x-sm:mt-10'>
            <Button
              title='Contact us'
            />
          </div>

        </div>
      </div>
    </div>
  )
}