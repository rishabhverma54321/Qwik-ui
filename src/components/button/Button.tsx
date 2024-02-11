import React,{useState, useEffect} from 'react'

interface ButtonProps {
    button:string;
}

const Button: React.FC<ButtonProps> = ({button=""}) => {
  const [value, setValue] = useState(0)
  useEffect(()=>{
    setValue(1);
  },[])
  return (
    <button>{button}</button>
  )
}

export default Button
