
import { marks } from '../constants';

export function Section4() {
  return (
    <div className=' md:h-[24rem] x-sm:full max-w-[100%] w-full flex flex-col relative '>
      <h1 className='md:text-base x-sm:text-sm text-yellow-500 uppercase tracking-widest text-center mt-28'>memberships </h1>
      <div className='flex mt-16 overflow-x-hidden space-x-24 '>
        <div className='space-x-24 flex animate-marquee whitespace-nowrap'>
          {marks.map(mark => {
            return (
              <img src={mark.logo} alt={mark.name} className='md:w-[17rem] md:h-24 x-sm:w-36 x-sm:h-12' />
            )
          })}
        </div>

      </div>
    </div>
  )
}