import React from 'react'

interface ButtonProps {
    button:string;
}

const Button: React.FC<ButtonProps> = ({button}) => {
  return (
    <button>This is button</button>
  )
}

export default Button
