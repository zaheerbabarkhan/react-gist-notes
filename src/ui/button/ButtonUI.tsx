import React from "react"
import "./buttonui.scss"
import { IconBaseProps } from "react-icons"

interface ButtonUIProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: React.ReactNode
  className?: string
}
const ButtonUI: React.FC<ButtonUIProps> = ({ className, text, ...props }) => {
  return (
    <button className={`button-ui ${className}`} {...props}>
      {text}
    </button>
  )
}

export default ButtonUI
