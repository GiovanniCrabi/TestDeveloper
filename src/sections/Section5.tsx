import apple from '../assets/appleLogo.png';
import tesla from '../assets/tesla-logo.png';
import samsung from '../assets/samsungLogo.png';

export function Section5() {
  return (
    <div className=' h-[24rem] max-w-[100%] w-full flex flex-col relative '>
        <h1 className='md:text-base x-sm:text-sm text-yellow-500 uppercase tracking-widest text-center mt-28 absol'>memberships </h1>
        <div className='flex mt-16 space-x-24 overflow-auto '>
          <img src={tesla} alt="tesla" />
          <img src={samsung} alt="samsung" />
          <img src={apple} alt="apple" />
          <img src={tesla} alt="tesla" />
          <img src={samsung} alt="samsung" />
          <img src={apple} alt="apple" />
          <img src={tesla} alt="tesla" />
        </div>
      </div>
  )
}