import { ReactNode } from 'react';

import "swiper/css/pagination";
import 'swiper/css/navigation';
import { useSwiper } from 'swiper/react';

import { Slide, Slider, SliderProps } from './index'

import {  ArrowLeft, ArrowRight } from 'phosphor-react';

import { ArrowButtom } from '../ArrowButton';
import { CardsDetails } from '../../constants';

type ButtonProps = {
  children: ReactNode;
}

export function CardsCarousel() {
  const SwiperButtonPrev = ({ children }: ButtonProps) => {
    const swiper = useSwiper();
    return <button onClick={() => swiper.slidePrev()}> {children} </button>
  }

  const SwiperButtonNext = ({ children }: ButtonProps) => {
    const swiper = useSwiper();
    return <button onClick={() => swiper.slideNext()}> {children} </button>
  }

  const settings: SliderProps = {
    pagination: false,
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 9,
      },
      420: {
        spaceBetween: 20,
        slidesPerView: 3,
      }
    }
  }


  return (
    <>
      <h1 className='text-white text-5xl leading-[63px] md:pl-28 x-sm:pl-12 mt-20'>Media</h1>

      <Slider settings={settings}>
        <div className='w-full h-full x-sm:h-full overflow-hidden'>
          {CardsDetails.map((cards) => {
            return (
              <Slide>
                  <div key={''} className="x-sm:max-w-[90%] md:max-w-full md:w-[28rem] x-sm:w-full md:h-[37rem] x-sm:h-[32rem] md:pl-28 md:mt-14 x-sm:mt-8 relative">
                    <img src={cards.background} className="w-full h-full bg-cover bg-no-repeat bg-bottom absolute" />

                    <div
                      className='absolute h-full w-full'
                      style={{
                        backgroundImage: "linear-gradient(359.48deg, #0C1623 26.57%, rgba(12, 22, 35, 0) 99.56%)",
                      }}
                    >
                      <div className="mt-5 pl-5">
                        <div className={`h-9 w-min bg-${cards.button?.color} rounded-full px-4 py-2 flex justify-center items-center`}>
                          <h1 className="text-white text-center text-xs font-bold uppercase tracking-widest"> {cards.button?.name} </h1>
                        </div>

                        <div className="md:mt-64 x-sm:mt-28">
                          <time className="text-white font-medium text-sm tracking-[0.3em]">{cards.data}</time>
                          <h1 className="md:w-[22rem] x-sm:w-72 mt-3 text-white text-2xl font-normal ">{cards.title}</h1>
                          <p className="md:max-w-sm x-sm:max-w-[17rem] font-normal md:w-[22rem] x-sm:w-80 md:text-base x-sm:text-lg text-white opacity-60 md:mt-5 x-sm:mt-3  ">{cards.content}</p>
                          <button className="flex items-center mt-16 space-x-1.5">
                            <h1 className="text-white uppercase text-sm font-medium tracking-[0.3em]">{cards.input}</h1>
                            <ArrowRight size={14} className="text-yellow.100" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
              </ Slide>
            )
          })}
        </div>



        <div className='z-30 md:pl-28 x-sm:pl-5 space-x-2.5 md:mt-8 x-sm:mt-5 '>
          <SwiperButtonPrev>
            <ArrowButtom  icon={<ArrowLeft />} />
          </SwiperButtonPrev>

          <SwiperButtonNext>
            <ArrowButtom icon={<ArrowRight  />} />
          </SwiperButtonNext>
        </div>


      </Slider>
    </>

  )
}