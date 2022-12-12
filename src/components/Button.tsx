interface ButtonProps {
  title: string;
}

export function Button({ title }: ButtonProps) {
  return (
      <button className={`w-48  h-16 text-white  shadow-2xl bg-blue hover:bg-sky-700 duration-200 flex self-center text-center clip-path-mypolygon justify-center items-center`} >
          <h1 className="font-medium text-base leading-5">{title}</h1>
      </button>
  )
}