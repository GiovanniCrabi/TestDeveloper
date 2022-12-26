interface HamburguerProps {
  onClick: React.MouseEventHandler<HTMLDivElement>;
}

export const HamburguerMenu = ({onClick} : HamburguerProps) => {
  return (
    <div 
      onClick={onClick}
      className="space-y-1.5 ">
      <div className="w-6 h-1 bg-yellow.100 clip-path-menuHamburguer" />
      <div className="w-6 h-1 bg-white clip-path-menuHamburguer" />
      <div className="w-6 h-1 bg-white clip-path-menuHamburguer" />
    </div>
  )
}