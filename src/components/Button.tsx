interface ButtonProps {
  title: string;
}

export function Button({ title }: ButtonProps) {
  return (
      <button className={`w-48  h-16 text-white  shadow-2xl bg-blue ease-out duration-300 flex self-center text-center clip-path-mypolygon justify-center items-center hover:bg-sky-700 hover:w-[12.5rem] hover:h-[4.1rem]`} >
          <h1 className="font-medium text-base leading-5">{title}</h1>
      </button>
  )
}