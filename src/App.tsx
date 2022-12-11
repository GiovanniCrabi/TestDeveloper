import './index.css';

import image2 from './assets/image-2.png';
import image3 from './assets/image-3.png';
import apple from './assets/appleLogo.png';
import tesla from './assets/tesla-logo.png';
import samsung from './assets/samsungLogo.png';

import { Header } from './components/Header'


import { ArrowCircleDown, ArrowCircleLeft, ArrowCircleRight, Circle } from 'phosphor-react';
import { Button } from './components/Button';

function App() {
  const background4 = {
    backgroundImage: 'linear-gradient(38.77deg, #1F376A 28.03%, rgba(31, 55, 106, 0) 77.19%)',

  }
  return (
    <div>
      <div
        className="bg-[length:100vw_100vh] bg-bottom bg-no-repeat bg-[url('./assets/image-1.png')] relative"
      >
        <div
          className="h-screen  bg-gradient-to-tr from-blue.background"
        >
          <img src={image2} className=' x-sm:invisible  md:visible w-screen max-h-[100%] opacity-20 absolute' />
          <Header />

          <div className='w-full flex flex-col items-center text-center'>
            <div className='x-sm:w-80 md:w-full'>
              <h1 className='text-white x-sm:text-5xl md:text-8xl font-normal mt-20 z-50'>Welcome to StarForm</h1>
              <p className='text-white x-sm:text-lg md:text-xl mt-3 z-50'>Helping nations achieve <span className='text-transparent bg-clip-text bg-yellow.100'>Lower emissions with Star-Based Solar Technology </span></p>
            </div>

            <ArrowCircleDown className='text-white text-3xl mt-40' />
          </div>
        </div>
      </div>

      <div className='md:flex x-sm:flex-row x-sm:px-6 x-sm:justify-center'>
        <div className='x-sm:w-full md:w-[23rem] md:mt-4 '>
          <h1 className='text-base text-yellow-500 uppercase tracking-widest'>Our mission</h1>
        </div>

        <div className='x-sm:w-full md:w-[45rem] x-sm:mt-3'>
          <h1 className='text-white x-sm:text-2xl md:text-4xl text-left '> Climate change and the pressures on global energy resources are urgent problems. The UK has set out an ambitious national clean energy policy to fully decarbonise the economy by 2050. </h1>
          <div className='x-sm:mt-10 md:mt-16'>
            <Button
              title='Business Plan'
            />
          </div>
        </div>
      </div>

      <div className='x-sm:px-6 md:px-0 flex md:flex-row x-sm:flex-col-reverse md:h-[60rem] overflow-hidden items-center'   >
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

        <img src={image3} className='md:w-[38rem] x-sm:w-[25rem] md:h-[37rem] x-sm:h-[23rem] md:-mt-6 x-sm:mt-28 clip-path-mypolygonImage' />
      </div>

      <div className='h-[54rem] w-full bg-[url("/image4.jpg")] bg-cover bg-no-repeat bg-bottom  relative x-sm:mt-24'>
        <div 
          className='absolute h-full w-full'
          style={{
          backgroundImage: "linear-gradient(38.77deg, #1F376A 28.03%, rgba(31, 55, 106, 0) 77.19%)", 
        }}
        >
          <div className='x-sm:px-5 flex flex-col items-center text-center md:mt-64 x-sm:mt-24'>
            <h1 className='md:text-base x-sm:text-sm text-yellow-500 uppercase tracking-widest'>The Global Challenge</h1>
            <h1 className='md:w-[60rem] text-white md:text-5xl x-sm:text-3xl md:leading-[4rem] x-sm:leading-10 mt-5'>Climate change and the pressures on global energy resources are urgent problems.</h1>
            <p className='md:w-[42rem] font-normal text-base leading-8 mt-5 opacity-80 text-white'>The UK has set out an ambitious national clean energy policy – Net Zero – to fully decarbonise the economy by 2050. This future energy scenario requires clean and sustainable energy generation from renewable sources.</p>

            <div className='md:mt-12 x-sm:mt-10'>
              <Button 
                title='Business Plan'
              />
            </div>

            <div className='flex items-center justify-center mt-32 space-x-2.5'>
              <ArrowCircleLeft size={36} weight='thin' className=' text-white'/>
              <div className='flex space-x-1'>
                <Circle size={12} className='text-white'/>
                <Circle size={12} className='text-white'/>
                <Circle size={12} className='text-white'/>
                <Circle size={12} className='text-white'/>
                <Circle size={12} className='text-white'/>
                <Circle size={12} className='text-white'/>
              </div>   
              <ArrowCircleRight size={36} weight='thin' className=' text-white' />
            </div>
          </div>
        </div>
      </div>

      <div className=' h-[24rem] max-w-[100%] w-full flex flex-col relative overflow-auto'>
        <h1 className='md:text-base x-sm:text-sm text-yellow-500 uppercase tracking-widest text-center mt-28'>memberships </h1>
        <div className='flex mt-16 space-x-24'>
          <img src={tesla} alt="tesla" />rectangle4.png'
          <img src={samsung} alt="samsung" />
          <img src={apple} alt="apple" />
          <img src={tesla} alt="tesla" />
          <img src={samsung} alt="samsung" />
          <img src={apple} alt="apple" />
          <img src={tesla} alt="tesla" />
        </div>
      </div>

      <div className='w-full h-[60rem] bg-green absolute '>
        <h1 className='text-white text-5xl leading-[63px] pl-28 mt-20'>Media</h1>
        <div className='pl-28 mt-12 flex space-x-5'>
          
        </div>
      </div>

    </div>
  )
}

export default App