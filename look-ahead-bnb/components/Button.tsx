"use client"

import { IconType } from 'react-icons'
import { motion } from 'framer-motion'

interface ButtonProps{
  label?: string,
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void,
  disabled?: boolean,
  outline?: boolean,
  small?: boolean,
  icon?: IconType,
  gradientBorder?: boolean
}

const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  disabled,
  outline,
  small,
  icon: Icon,
  gradientBorder = false
}) => {
  return (
    <motion.button whileTap={{ scale: 0.9 }} whileHover={{ scale: 1.03 }} onClick={ onClick } disabled={ disabled } className={`
      flex
      flex-row
      items-center
      justify-center
      disabled:opacity-70
      disabled:cursor-not-allowed
      rounded-lg 
      hover:opacity-90
      transition
      w-full
      ${gradientBorder && "gradient-border-button"}
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
    </motion.button>
  )
}

export default Button
