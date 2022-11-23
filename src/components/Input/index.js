import React from "react";

import { InputComponents, InputContainer, InputLabel } from "./styles";

export function Input({ label, ...props }) {
  return (
    <InputContainer>
      <InputLabel htmlFor={`input-${label}`}>{label}</InputLabel>
      <InputComponents
        data-testid="input-test"
        placeholder={label}
        {...props}
        id={`input-${label}`}
      />
    </InputContainer>
  );
}
