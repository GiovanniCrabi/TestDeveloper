

export function Section6() {
  return (
    <div className='w-full h-[60rem] bg-green absolute '>
      <h1 className='text-white text-5xl leading-[63px] pl-28 mt-20'>Media</h1>
      <div className='pl-28 mt-12 flex space-x-5'>
        <div className={`w-[445px] h-[587px]`}>
          <div className="w-[28rem] h-[37rem] relative">
            <img src="/rectangle2.png" className="w-full h-full bg-cover bg-no-repeat bg-bottom  absolute" />

            <div
              className='absolute h-full w-full'
              style={{
                backgroundImage: "linear-gradient(359.48deg, #0C1623 26.57%, rgba(12, 22, 35, 0) 99.56%)",
              }}
            >
              <div className="mt-5 pl-5">
                <div className="h-9 w-min bg-light.blue rounded-full px-4 py-2 flex justify-center items-center">
                  <h1 className="text-white text-center text-xs font-bold uppercase tracking-widest"> Events </h1>
                </div>

                <div className="mt-72">
                  <time className="text-white font-medium text-sm tracking-[0.3em]">24/02/2022</time>
                  <h1>Convene an International Partnership for development.</h1>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}