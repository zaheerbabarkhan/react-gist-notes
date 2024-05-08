import React from "react"
import "./buttonui.scss"

interface ButtonUIProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string
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
