import { BsTwitter } from "react-icons/bs";

import frameworkLogo from '../assets/framework.png';
import { navigationItems } from "../constants";


export function Section7() {
  return (
    <section className="w-full md:h-[28rem] x-sm:h-full absolute">
      <div className="flex md:flex-row x-sm:flex-col justify-between md:mt-20 x-sm:mt-12 md:px-28 x-sm:px-6">
        <h1 className='text-gray-50 x-sm:text-base md:text-2xl bold'>Start<span className='font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow.gradient1 to-yellow.gradient2'>Form</span></h1>

        <div className="md:mt-0 x-sm:mt-16 space-y-5">
          <div>
            <h1 className="text-white font-medium md:text-sm x-sm:text-xs leading-4 tracking-[0.3em] uppercase">Contact Us</h1>
          </div>

          <div>
            <a href="mailto:info@starform.com">
              <h2 className="text-white underline underline-offset-8 font-normal text-3xl leading-10 tracking-[0.01em]">info@starform.com</h2>
            </a>
          </div>

          <div>
            <a href="tell:+4401235428199">
              <h2 className="text-white underline underline-offset-8 font-normal text-3xl leading-10 tracking-[0.01em]">+44 (0)1235 428199</h2>
            </a>
          </div>

        </div>

        <div className="md:mt-0 x-sm:mt-12">
          <h1 className="text-white font-medium md:text-sm x-sm:text-xs leading-4 tracking-[0.3em] uppercase">Navigation</h1>
          <div className="flex mt-6 space-x-12">
            <span className="space-y-5">
              {navigationItems.map(items => {
                return (
                  <div>
                    <a href={items.link}>
                      <p className=" text-white text-sm leading-4 opacity-60">{items.name}</p>
                    </a>
                  </div>
                )
              })}
            </span>
            <span className="space-y-5">
              <div>
                <a href="/">
                  <p className=" text-white text-sm leading-4 opacity-60">FAQs</p>
                </a>
              </div>
              <div>
                <a href="/">
                  <p className=" text-white text-sm leading-4 opacity-60">Contact us</p>
                </a>
              </div>
            </span>
          </div>

        </div>

        <div className="md:mt-0 x-sm:mt-12">
          <h1 className="text-white font-medium md:text-sm x-sm:text-xs leading-4 tracking-[0.3em] uppercase">Legal</h1>
          <span className="space-y-5">
            <div>
              <a href="/">
                <p className=" text-white text-sm leading-4 opacity-60  mt-6">Terms & Conditions</p>
              </a>
            </div>
            <div>
              <a href="/" >
                <p className=" text-white text-sm leading-4 opacity-60">Privacy Policy</p>
              </a>
            </div>
          </span>
        </div>
        <a href="https://twitter.com/">
          <BsTwitter size={20} className="md:mt-0 text-white x-sm:mt-0 md:self-auto x-sm:self-end x-sm:absolute md:relative " />
        </a>
      </div>

      <footer className="flex md:justify-between md:flex-row x-sm:flex-col md:px-28 x-sm:px-5 md:mt-28 x-sm:mt-12 md:space-y-0 x-sm:space-y-5">
        <p className="text-white text-xs tracking-[0.02em]">© StarForm 2022  |  All rights reserved.</p>
        <p className="text-white text-xs tracking-[0.02em]">Website design by <span className="text-white text-sm font-bold tracking-[0.02em]">Framework.</span></p>
      </footer>

    </section>
  )
}