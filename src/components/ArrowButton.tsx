import { ArrowLeft, ArrowRight, IconProps } from "phosphor-react";
import React, { ReactNode } from "react";

type IconType = (props: IconProps) => JSX.Element;

interface ArrowButtomProps {
  icon: ReactNode
}

export function ArrowButtom({icon}:ArrowButtomProps) {
  return (
    <button className="text-white w-16 h-16 border grid place-items-center">
      {icon}
    </button>
  )
}