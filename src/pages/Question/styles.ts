import styled from "styled-components";

export const QuestionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  gap: 20px;
`;

export const ButtonsQuestionsArea = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  gap: 20px;

  width: 100%;

  @media screen and (max-width: 600px) {
    flex-direction: column;
  }
`;

interface ButtonsAnsweredProps {
  backgroundColor: string;
  answeredThis?: boolean;
}

export const ButtonsAnswered = styled.button<ButtonsAnsweredProps>`
  width: 100%;
  height: fit-content;

  padding: 10px 20px;

  border: none;

  border-radius: 3px;

  transition: filter 1s;

  color: #e9eef8;
  font-size: 1rem;

  background: ${({ backgroundColor }) => backgroundColor};

  border: ${({ answeredThis, theme }) =>
    answeredThis ? `3px solid ${theme.primary}` : ""};

  &:disabled {
    cursor: not-allowed;
  }

  &:hover:not(:disabled) {
    filter: brightness(0.6);
  }
`;
