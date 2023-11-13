import {ButtonHTMLAttributes} from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
}


export default function Button({children, onClick, className}: ButtonProps) {
  return <button className={`px-4 py-2 rounded-full transition-all ${className}`}
                 onClick={onClick}>
    {children}
  </button>
}
