import styled from "styled-components";

export const ContainerDashboard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  gap: 20px;

  ul {
    border-bottom: 30px;
  }
`;

export const TitleDashboard = styled.h1`
  font-size: 1.8rem;
  width: 100%;
  border-bottom: 1px solid ${({ theme }) => theme["primary-text"]};
`;
