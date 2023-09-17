import { IconType } from 'react-icons'

interface ButtonProps{
  label?: string,
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void,
  disabled?: boolean,
  outline?: boolean,
  small?: boolean
  icon?: IconType
}

const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  disabled,
  outline,
  small,
  icon : Icon
}) => {
  return (
    <button onClick={ onClick } disabled={ disabled } className={`
      flex
      flex-row
      items-center
      justify-center
      disabled:opacity-70
      disabled:cursor-not-allowed
      rounded-lg 
      hover:opacity-80
      transition
      w-full
      ${outline ? "bg-white" : "bg-rose-500"} 
      ${outline ? "border-black" : "border-rose-500"} 
      ${outline ? "text-black" : "text-white"}
      ${small ? "py-1" : "py-3"}
      ${small ? "text-sm" : "text-md"}
      ${small ? "font-light" : "font-semibold"}
      ${small ? "border-[1px]" : "border-2"}
    `}>
      {Icon && (
        <Icon size={24} className="mr-3"/>
      )}
      {label}
    </button>
  )
}

export default Button
