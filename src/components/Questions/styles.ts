import styled from "styled-components";

export const QuestionsArea = styled.ul`
  width: 100%;
  margin-bottom: 30px;
`;

export const QuestionsItems = styled.ul`
  list-style: none;

  li {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    gap: 20px;

    padding: 10px;
    background: ${({ theme }) => theme["primary-text"]};
    color: ${({ theme }) => theme.background};

    cursor: pointer;

    transition: filter 1s;

    margin-bottom: 5px;

    p {
      font-size: 1rem;
    }

    span {
      font-weight: 800;

      &.time {
        font-size: 0.8rem;
        font-weight: normal;
        margin-left: auto;
      }
    }

    img {
      width: 50px;
      border-radius: 100%;
    }

    &:hover {
      filter: brightness(0.7);
    }
  }
`;
