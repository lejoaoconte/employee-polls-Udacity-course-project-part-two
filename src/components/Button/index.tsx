import { ButtonHTMLAttributes } from "react";

import { ButtonContainer } from "./styles";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
}

export function Button({ label, ...props }: ButtonProps) {
  return <ButtonContainer {...props} data-testid='button-test'>{label}</ButtonContainer>;
}
