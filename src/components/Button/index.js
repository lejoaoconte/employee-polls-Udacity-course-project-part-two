import React from "react";

import { ButtonContainer } from "./styles";

export function Button({ label, ...props }) {
  return (
    <ButtonContainer {...props} data-testid="button-test">
      {label}
    </ButtonContainer>
  );
}
