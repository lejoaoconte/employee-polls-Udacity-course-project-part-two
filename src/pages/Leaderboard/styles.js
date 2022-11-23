import styled from "styled-components";

export const LeaderboardContainer = styled.div`
  width: 100%;
`;

export const TableBord = styled.table`
  width: 100%;
  margin-top: 30px;

  border-collapse: collapse;
  border: none;

  td:first-child,
  th:first-child {
    width: 80%;
  }

  td,
  th {
    text-align: left;
    padding: 10px;

    color: ${({ theme }) => theme["primary-text"]};
  }

  thead {
    tr {
      background: ${({ theme }) => theme.primary};
    }
  }

  tbody {
    tr {
      background: ${({ theme }) => theme.primary};
      filter: brightness(0.8);
    }

    td:not(:first-child) {
      text-align: center;
    }
  }
`;

export const UserArea = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  align-items: center;
  justify-content: flex-start;
  img {
    width: 30px;
  }
`;
