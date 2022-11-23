import { InputHTMLAttributes } from "react";
import { ContainerSwitch, InputSwitch, LabelInputSwitch } from "./styles";

export function Switch({ label, ...props }) {
  return (
    <ContainerSwitch>
      <InputSwitch
        data-testid="switch-test"
        {...props}
        type="checkbox"
        id={label}
        hidden
      />
      <LabelInputSwitch htmlFor={label}></LabelInputSwitch>
    </ContainerSwitch>
  );
}
