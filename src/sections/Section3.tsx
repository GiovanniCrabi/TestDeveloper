import { Button } from "../components/Button";

import image3 from '../assets/image-3.png';


export function Section3() {
  return (
    <div className='x-sm:px-6 md:px-0 flex md:flex-row x-sm:flex-col-reverse overflow-hidden items-center md:mt-36 x-sm:mt-32'   >
      <div className='md:w-[49%] md:pl-28 md:mt-2 x-sm:mt-10'>
        <h1 className='md:text-base x-sm:text-sm text-yellow-500 uppercase tracking-widest'>The Global Challenge</h1>
        <h1 className='text-white md:text-5xl x-sm:text-3xl md:leading-[4rem] x-sm:leading-10 text-left mt-5'> Climate change and the pressures on global energy resources are urgent problems. </h1>
        <p className='font-normal text-base leading-8 mt-5 opacity-80 text-white'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna vitae elementum interdum scelerisque quisque donec nulla. Velit diam quam nullam elit hac sit. Nunc, lacus, facilisis mattis amet mauris volutpat dui tellus nam. Neque, rhoncus placerat vitae arcu habitant. Dignissim quam ipsum dolor egestas non orci. At enim ut elementum.</p>

        <div className='mt-10'>
          <Button
            title='About us'
          />
        </div>
      </div>

      <img src={image3} className='md:w-[38rem] x-sm:w-[25rem] md:h-[37rem] x-sm:h-[23rem] clip-path-mypolygonImage' />
    </div>
  )
}