import { Button } from "../components/Button";


export function Section2() {
  return (
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
  )
}