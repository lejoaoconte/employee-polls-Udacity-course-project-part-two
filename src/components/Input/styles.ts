import styled from "styled-components";

export const InputLabel = styled.label`
  position: absolute;
  padding: 0 10px;
  top: 13px;

  font-size: 1rem;

  cursor: text;

  visibility: hidden;
`;

export const InputComponents = styled.input`
  outline: none;

  width: 100%;

  padding: 13px 10px;
  cursor: text;

  border: 0;
  border-radius: 5px;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;

  width: 100%;

  border: 1px solid ${({ theme }) => theme.primary};
  border-radius: 5px;

  &:focus-within > ${InputLabel} {
    visibility: visible;
    font-size: 0.8rem;
    color: ${({ theme }) => theme["primary-text"]};

    top: -12px;
    left: 10px;

    background: ${({ theme }) => theme.background};

    padding: 2px 10px;

    transition: all 0.5s;
  }
`;
