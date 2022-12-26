import  { ReactNode } from "react";

interface ArrowButtomProps {
  icon: ReactNode
}

export function ArrowButtom({icon}:ArrowButtomProps) {
  return (
    <button className="text-white w-16 h-16 border grid place-items-center hover:bg-blue transition-colors hover:border-none">
      {icon}
    </button>
  )
}