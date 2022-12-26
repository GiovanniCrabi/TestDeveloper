import { X } from "phosphor-react";
import { useState } from "react";

import { headerLinks } from "../constants";
import { HamburguerMenu } from "./HamburguerMenu";

export function Header() {
  const [active, setActive] = useState('Business Plan');
  const [open, setOpen] = useState(false);

  return (
    <div className='flex md:flex-row x-sm:flex-col  x-sm:px-5 md:px-[7rem] md:pt-14 x-sm:pt-5 md:space-y-0 x-sm:space-y-4 justify-between'>
      <div className="items-center justify-between flex ">
        <h1 className='text-gray-50 x-sm:text-2xl md:text-3xl bold relative'>Start<span className='font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow.gradient1 to-yellow.gradient2'>Form</span></h1>

        <button className="text-2xl right-8 md:hidden">

          {!open && 
            <HamburguerMenu 
              onClick={() => setOpen(!open)}
            />
          }

          {open && 
            <X
              className="text-white"
              weight="bold"
              size={26} 
              onClick={() => setOpen(!open)}
            />
          }  
        </button>
      </div>

          <ul className={`text-gray-50 md:relative x-sm:absolute md:pt-0 x-sm:pt-6 md:flex  ${!open ? 'hidden' : 'visible'} x-sm:space-y-2 md:space-y-0 md:justify-end items-center flex-1 gap-8 duration-300 ease-in`}>
            {headerLinks.map((header) => {
              return (
                <li
                  key={header.id}
                  className={`text-base cursor-pointer ${active === header.title ? "text-yellow.100" : "text-white"
                    }`}
                  onClick={() => setActive(header.title)}
                >
                  <a href={`#${header.id}`} className='hover:text-yellow-100 duration-500 hover:text-lg'> {header.title} </a>
                </li>
              )
            })}
          </ul>

    </div>
  )
}