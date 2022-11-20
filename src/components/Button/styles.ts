import styled from "styled-components";

export const ButtonContainer = styled.button`
  width: 100%;
  height: 45px;

  background: ${({ theme }) => theme.primary};
  border: 0;
  border-radius: 5px;

  font-weight: 600;

  text-transform: uppercase;

  color: ${({ theme }) => theme.background};

  transition: filter 1s;

  &:hover {
    filter: brightness(0.6);
  }
`;
