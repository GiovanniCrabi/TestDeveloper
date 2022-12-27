import 'swiper/css/navigation';
import { Slide, Slider, SliderProps } from './index';

import {  ArrowCircleLeft, ArrowCircleRight } from 'phosphor-react';

import { useSwiper } from 'swiper/react';
import { ReactNode } from 'react';
import { cardSliders } from '../../constants';
import { Button } from '../Button';

type ButtonProps = {
  children: ReactNode;
}

export function SlidesCarousel() {
  const SwiperButtonPrev = ({ children }: ButtonProps) => {
    const swiper = useSwiper();
    return <button onClick={() => swiper.slidePrev()}> {children} </button>
  }

  const SwiperButtonNext = ({ children }: ButtonProps) => {
    const swiper = useSwiper();
    return <button onClick={() => swiper.slideNext()}> {children} </button>
  }

  const settings: SliderProps = {
    spaceBetween: 50,
    slidesPerView: 1,
    pagination: {
      clickable: true
    },
  }

  return (
    <Slider settings={settings}>

      {cardSliders.map((card) => {
        return (
          <Slide key={card.id}>
            <div className={`h-[54rem] w-full bg-[${card.url}] bg-cover bg-no-repeat bg-bottom  relative md:mt-32 x-sm:mt-24`}>
              <div
                className='absolute h-full w-full'
                style={{
                  backgroundImage: `${card.background}`,
                }}
              >
                <div className='x-sm:px-5 flex flex-col items-center text-center md:mt-64 x-sm:mt-24'>
                  <h1 className='md:text-base x-sm:text-sm text-yellow.100 uppercase tracking-widest'>{card.title}</h1>
                  <h1 className='md:w-[60rem] text-white md:text-5xl x-sm:text-3xl md:leading-[4rem] x-sm:leading-10 mt-5'>{card.subTitle}</h1>
                  <p className='md:w-[42rem] font-normal text-base leading-8 mt-5 opacity-80 text-white'>{card.content}</p>

                  <div className='md:mt-12 x-sm:mt-10'>
                    <Button
                      title='Business Plan'
                    />
                  </div>

                </div>

              </div>
            </div>
            <div className='absolute bottom-24 space-x-28'>
            <SwiperButtonPrev>
                <ArrowCircleLeft size={36} className='text-white hover:text-yellow.100 ease-out duration-300' weight='thin' />
              </SwiperButtonPrev>

              <SwiperButtonNext>
                <ArrowCircleRight size={36} className='text-white  hover:text-yellow.100 ease-out duration-300' weight='thin' />
              </SwiperButtonNext>
            </div>
           

          
          </Slide>


        )
      })}
    </Slider>
  )
}