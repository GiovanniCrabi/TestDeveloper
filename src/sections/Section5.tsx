import { ArrowLeft, ArrowRight, ArrowSquareLeft, ArrowSquareRight } from "phosphor-react";
import { useState } from "react";
import { ArrowButtom } from "../components/ArrowButton";
import { CardsDetails } from "../constants";


export function Section5() {

  return (
    <div className='w-full h-full x-sm:h-full overflow-hidden bg-red-600'>
      <h1 className='text-white text-5xl leading-[63px] md:pl-28 x-sm:pl-5 mt-20'>Media</h1>
      <div className='w-full md:pl-28 x-sm:px-6 md:mt-12 x-sm:mt-7 flex x-sm:justify-center md:justify-start md:space-x-5 x-sm:space-x-2.5'>
        {CardsDetails.map((cards) => {
            return (
              <div key={''} className="md:w-[28rem] x-sm:w-full md:h-[37rem] x-sm:h-[32rem] relative">
                <img src={cards.background} className="w-full h-full bg-cover bg-no-repeat bg-bottom absolute" />
  
                <div
                  className='absolute h-full w-full'
                  style={{
                    backgroundImage: "linear-gradient(359.48deg, #0C1623 26.57%, rgba(12, 22, 35, 0) 99.56%)",
                  }}
                >
                  <div className="mt-5 pl-5">
                    <div className={`h-9 w-min bg-[${cards.button?.color}] rounded-full px-4 py-2 flex justify-center items-center`}>
                      <h1 className="text-white text-center text-xs font-bold uppercase tracking-widest"> {cards.button?.name} </h1>
                    </div>
  
                    <div className="md:mt-64 x-sm:mt-28">
                      <time className="text-white font-medium text-sm tracking-[0.3em]">{cards.data}</time>
                      <h1 className="md:w-[22rem] x-sm:w-72 mt-3 text-white text-2xl font-normal ">{cards.title}</h1>
                      <p className="font-normal md:w-[22rem] x-sm:w-80 md:text-base x-sm:text-lg text-white opacity-60 md:mt-5 x-sm:mt-3 ">{cards.content}</p>
                      <button className="flex items-center mt-16 space-x-1.5">
                        <h1 className="text-white uppercase text-sm font-medium tracking-[0.3em]">{cards.input}</h1>
                        <ArrowRight size={14} className="text-yellow.100" />
                      </button>
                    </div>
                  </div>
  
                </div>
              </div>
            )
          })}
        </div>
  
        <div className="flex md:pl-28 space-x-3 mt-7 x-sm:pl-6 ">
          <ArrowButtom icon={<ArrowLeft />} />
          <ArrowButtom icon={<ArrowRight />} />
        </div>
      </div>
    )
  }