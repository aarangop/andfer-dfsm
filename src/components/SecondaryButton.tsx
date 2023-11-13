import Button from "@/components/Button";
import {ButtonHTMLAttributes} from "react";

interface SecondaryButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {

}

export default function SecondaryButton({onClick, children}: SecondaryButtonProps) {
  return <Button onClick={onClick}>{children}</Button>
}