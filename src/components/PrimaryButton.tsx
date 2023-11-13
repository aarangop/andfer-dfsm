import React, {ButtonHTMLAttributes} from "react";
import Button from "@/components/Button";

interface PrimaryButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {

}

export default function PrimaryButton({children, onClick}: PrimaryButtonProps) {
  return <Button onClick={onClick} className="font-semibold bg-slate-700 hover:bg-violet-700">
    {children}
  </Button>
}