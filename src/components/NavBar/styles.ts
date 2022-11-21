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

export const MenuItems = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  gap: 20px;
`;

interface NavBarItemsProps {
  openMenu: boolean;
}

export const NavBarItems = styled.ul<NavBarItemsProps>`
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;

  display: flex;
  gap: 15px;

  @media screen and (max-width: 600px) {
    display: ${({ openMenu }) => (openMenu ? "none" : "flex")};

    position: absolute;

    left: 0;
    bottom: 0;

    flex-direction: column;
    align-items: center;
    background: ${({ theme }) => theme.primary};

    width: 100%;
    padding: 20px 0;
    gap: 20px;

    z-index: 1000;

    box-shadow: 0 -3px 18px -3px rgba(31, 31, 31, 0.75);

    animation-name: example;
    animation-duration: 4s;

    @keyframes example {
      from {
        bottom: -200px;
      }
      to {
        bottom: 0;
      }
    }
  }
`;

export const ListItemNav = styled.li`
  float: left;

  a,
  button {
    text-decoration: none;
    font-weight: 800;
    color: ${({ theme }) => theme["primary-text"]};
    font-size: 1.1rem;

    cursor: pointer;

    background: none;
    border: none;

    @media screen and (max-width: 600px) {
      color: ${({ theme }) => theme.background};
    }
  }

  &:hover {
    filter: brightness(0.6);
  }
`;

export const ButtonOpenMenu = styled.button`
  display: none;
  text-decoration: none;
  font-weight: 800;
  color: ${({ theme }) => theme["primary-text"]};
  font-size: 1.5rem;

  cursor: pointer;

  background: none;
  border: none;

  @media screen and (max-width: 600px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
