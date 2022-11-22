import { InputHTMLAttributes } from "react";
import { ContainerSwitch, InputSwitch, LabelInputSwitch } from "./styles";

interface SwitchProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export function Switch({ label, ...props }: SwitchProps) {
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
