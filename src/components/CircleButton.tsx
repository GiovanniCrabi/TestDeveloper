import  { ReactNode } from "react";

interface CircleButtomProps {
  icon: ReactNode
}

export function CircleButtom({icon}:CircleButtomProps) {
  return (
    <button className="text-white w-9 h-9 border rounded-full grid place-items-center hover:bg-yellow.100 transition-colors hover:border-none">
      {icon}
    </button>
  )
}