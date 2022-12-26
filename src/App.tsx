import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import './index.css';

import { Section1 } from './sections/Section1';
import { Section2 } from './sections/Section2';
import { Section3 } from './sections/Section3';
import { Section4 } from './sections/Section4';
import { Section5 } from './sections/Section5';
import { Section6 } from './sections/Section6';
import { Section7 } from './sections/Section7';
import { CircleStyle } from "./components/CircleStyle";
import { SwiperProps, SwiperSlide } from "swiper/react";
import { CardsCarousel } from "./components/Slides/CardsCarousel";
import { SlidesCarousel } from "./components/Slides/Slides";

function App() {

  return (
    <div>
      <Section1 />

      <Section2 />

      <SlidesCarousel />

      <Section4 />

      <CardsCarousel />

      <Section6 />

      <Section7 />




    </div>
  )
}

export default App