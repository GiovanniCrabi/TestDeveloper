import "./index.css";

import { Section1 } from "./sections/Section1";
import { Section2 } from "./sections/Section2";
import { Section4 } from "./sections/Section4";
import { Section6 } from "./sections/Section6";
import { Section7 } from "./sections/Section7";
import { CardsCarousel } from "./components/Slides/CardsCarousel";
import { SlidesCarousel } from "./components/Slides/Slides";
import { CircleStyle } from "./components/CircleStyle";

function App() {
  return (
    <div className="overflow-hidden w-screen">
      <Section1 />

      <Section2 />

      <SlidesCarousel />

      <Section4 />

      <CardsCarousel />

      <Section6 />

      <Section7 />
    </div>
  );
}

export default App;
