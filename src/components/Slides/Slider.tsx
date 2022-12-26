import { Swiper, SwiperProps, SwiperSlide } from "swiper/react";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination'
import './Slider.css'

import { ReactNode } from "react";
import { A11y, Navigation, Pagination } from "swiper";

interface SliderProps {
  children: ReactNode;
  settings: SwiperProps;
}

export function Slider( {settings, children}: SliderProps ) {
  return (
    <Swiper modules={[Navigation, Pagination, A11y]} {...settings}>
      {children}
    </Swiper>
  )
}