import { InputHTMLAttributes } from "react";

import { InputComponents, InputContainer, InputLabel } from "./styles";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export function Input({ label, ...props }: InputProps) {
  return (
    <InputContainer>
      <InputLabel htmlFor={`input-${label}`}>{label}</InputLabel>
      <InputComponents data-testid='input-test' placeholder={label} {...props} id={`input-${label}`} />
    </InputContainer>
  );
}
