import styled from "styled-components";

export const QuestionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  gap: 20px;

  img {
    width: 150px;
    border-radius: 100%;
  }
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

export const ButtonsAnswered = styled.button`
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

export const GraphQuestionsArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;

  width: 100%;
  margin-top: 20px;
  gap: 10px;

  h4 {
    font-weight: 600;
    font-size: 1.3rem;
  }
`;

export const GraphQuestion = styled.div`
  width: 100%;
  height: 30px;

  display: flex;
  flex-direction: row;

  animation: 2s width;

  @keyframes width {
    to {
      width: 100%;
    }
    from {
      width: 0;
    }
  }
`;

export const OptionOneRange = styled.div`
  width: ${({ width }) => `${width}%`};
  height: 30px;
  background: #285430;
`;

export const OptionTwoRange = styled.div`
  width: ${({ width }) => `${width}%`};
  height: 30px;
  background: #a47e3b;
`;

export const TotalsArea = styled.div`
  width: 100%;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
