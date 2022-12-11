export function Cards() {
  return (
    <div  className={`w-[28rem] h-[37rem] bg-[url('/rectangle2.png'] bg-cover bg-no-repeat bg-bottom  relative`}>
       <div 
          className='absolute h-full w-full'
          style={{
          backgroundImage: "linear-gradient(359.48deg, #0C1623 26.57%, rgba(12, 22, 35, 0) 99.56%)", 
        }}
        >
          <div className="h-9 w-24 bg-light.blue rounded-full px-4 py-2 justify-center items-center">
            <h1 className="text-white text-center text-xs font-bold uppercase tracking-widest">Events</h1>
          </div>
        </div>
    </div>
  )
}