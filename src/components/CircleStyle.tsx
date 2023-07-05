interface CircleStylesProps {
  pxValue?: Number;
  mtValue?: Number;
}

export function CircleStyle({ pxValue, mtValue }: CircleStylesProps) {
  return (
    <div className="pl-[80rem]  overflow-hidden">
      <div className="w-full h-full">
        <div className="flex justify-center items-center z-10 ">
          <div className=" flex justify-center items-center w-[475px] h-[475px] rounded-full bg-yellow.100 p-[2px] sticky  ">
            <div className="flex justify-center items-center flex-col bg-blue.background w-[100%] h-[100%] rounded-full">
              <div className="flex justify-center items-center w-[370px] h-[370px] rounded-full bg-yellow.100 p-[2px] ">
                <div className="flex justify-center items-center flex-col bg-blue.background w-[100%] h-[100%] rounded-full">
                  <div className=" flex justify-center items-center w-[270px] h-[270px] rounded-full bg-yellow.100 p-[2px] ">
                    <div className="flex justify-center items-center flex-col bg-blue.background w-[100%] h-[100%] rounded-full" />
                  </div>
                </div>
              </div>
            </div>
          </div>




        </div>

      </div>
    </div>

  )
}