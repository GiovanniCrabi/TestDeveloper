import { useState } from "react";
import { headerLinks } from "../constants";

import {Hamburger } from 'phosphor-react'

export function Header() {
  const [active, setActive] = useState('Business Plan');

  return (
    <div className='flex px-6 py-10 md:px-24 md:py-16 justify-between items-center'>
      <h1 className='text-gray-50 x-sm:text-lg md:text-3xl bold '>Start<span className='font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow.gradient1 to-yellow.gradient2'>Form</span></h1>
      
        <div className="text-gray-50 list-none md:flex hidden justify-end items-center flex-1 gap-8">
          {headerLinks.map((header, i) => {
            return (
              <div
                key={header.id}
                className={`text-base cursor-pointer ${
                  active === header.title ? "text-yellow.100" : "text-white"
                }`} 
                onClick={() => setActive(header.title)}
              >
                <a href={`#${header.id}`}> {header.title} </a>
              </div>
            )
          })}
        </div>
        <div className="flex md:hidden">
          <Hamburger className="w-[23px] h-[19px]" color="white"  />
        </div>
        
    </div>
  )
}