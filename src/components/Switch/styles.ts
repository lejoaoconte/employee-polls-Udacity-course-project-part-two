import styled from "styled-components";

export const ContainerSwitch = styled.div``;

export const LabelInputSwitch = styled.label`
  cursor: pointer;

  position: relative;

  text-indent: -9999px;
  width: 35px;
  height: 15px;

  background: ${({ theme }) => theme["primary-text"]};

  display: block;

  border-radius: 100px;

  &:after {
    content: "";

    position: absolute;

    top: -2px;
    left: -5px;
    width: 20px;
    height: 20px;

    background: ${({ theme }) => theme.primary};

    border-radius: 90px;

    transition: 0.3s;
  }

  &:active:after {
    width: 35px;
  }
`;

export const InputSwitch = styled.input`
  height: 0;
  width: 0;

  &:checked + ${LabelInputSwitch} {
    background: ${({ theme }) => theme["primary-text"]};
  }

  &:checked + ${LabelInputSwitch}:after {
    left: calc(100% + 5px);

    transform: translateX(-100%);
  }
`;
