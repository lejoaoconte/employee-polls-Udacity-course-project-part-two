import styled from "styled-components";

export const ContainerNavBar = styled.nav`
  width: 100%;
  height: 60px;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  margin-bottom: 30px;
`;

export const NavBarItems = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;

  display: flex;
  gap: 15px;
`;

export const ListItemNav = styled.li`
  float: left;

  a, button {
    text-decoration: none;
    font-weight: 800;
    color: ${({ theme }) => theme["primary-text"]};
    font-size: 1.1rem;

    cursor: pointer;

    background: none;
    border: none;
  }

  &:hover {
    filter: brightness(0.6);
  }
`;
