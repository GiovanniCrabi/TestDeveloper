
import { marks } from '../constants';

export function Section4() {
  return (
    <div className=' h-[24rem] max-w-[100%] w-full flex flex-col relative '>
      <h1 className='md:text-base x-sm:text-sm text-yellow-500 uppercase tracking-widest text-center mt-28'>memberships </h1>
      <div className='flex mt-16 overflow-x-hidden space-x-24 '>
        <div className='space-x-24 flex animate-marquee whitespace-nowrap'>
          {marks.map(mark => {
            return (
              <img src={mark.logo} alt={mark.name} />
            )
          })}
        </div>

      </div>
    </div>
  )
}