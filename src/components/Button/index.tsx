import { ButtonHTMLAttributes } from "react";

import { ButtonContainer } from "./styles";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
}

export function Button({ label }: ButtonProps) {
  return <ButtonContainer data-testid='button-test'>{label}</ButtonContainer>;
}
