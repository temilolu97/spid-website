import React from 'react'
interface ButtonProps {
    text:string,
    onClick:()=>void,
    className?:string
}
const Button = ({text, onClick,className}:ButtonProps) => {
  return (
    <button className={`h-12 rounded-lg px-9 border ${className}`} onClick={onClick}>
        {text}
    </button>
  )
}

export default Button