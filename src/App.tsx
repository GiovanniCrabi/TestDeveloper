import './index.css';

import CircleRight from '../src/assets/YellowCircleRight.png';
import CircleLeft from '../src/assets/YellowCircle.png';

import { Section1 } from './sections/Section1';
import { Section2 } from './sections/Section2';
import { Section4 } from './sections/Section4';
import { Section6 } from './sections/Section6';
import { Section7 } from './sections/Section7';
import { CardsCarousel } from "./components/Slides/CardsCarousel";
import { SlidesCarousel } from "./components/Slides/Slides";
import { CircleStyle } from './components/CircleStyle';

function App() {

  return (
    <div>
      <Section1 />
      
        <img src={CircleRight} alt="CircleRight" className='absolute md:-mt-20 x-sm:mt-2 md:ml-[63.4rem] x-sm:ml-56 md:w-[21em] md:h-[28rem] x-sm:w-72 x-sm:h-72' />

      <Section2 />

      <SlidesCarousel />

      <Section4 />

      <img src={CircleLeft} className='absolute mt-48 md:block x-sm:hidden' />

      <CardsCarousel />
  
      <Section6 />

      <Section7 />

    </div>
  )
}

export default App