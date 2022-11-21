import { useContext, useState } from "react";

import { connect } from "react-redux";

import { Link, useNavigate } from "react-router-dom";

import { Switch } from "components/Switch";

import { ContextDefaultTheme } from "layouts/Default";

import { logoutUser } from "redux/actions/authedUser";

import { FaBars } from "react-icons/fa";

import {
  ButtonOpenMenu,
  ContainerNavBar,
  ListItemNav,
  MenuItems,
  NavBarItems,
} from "./styles";

export function NavBar({ dispatch }: any) {
  const navigate = useNavigate();
  const { setTheme, theme } = useContext(ContextDefaultTheme);
  const [openMenu, setOpenMenu] = useState(false);

  function handleLogout() {
    localStorage.removeItem("authedUser");
    dispatch(logoutUser());
    navigate("/");
  }

  function handleChangeTheme() {
    setTheme(!theme);
  }

  function handleOpenMenu() {
    setOpenMenu(!openMenu);
  }

  return (
    <ContainerNavBar>
      <img width={50} src="/logo.svg" alt="" />
      <MenuItems>
        <Switch label="switch" onChange={handleChangeTheme} checked={theme} />
        <NavBarItems openMenu={openMenu}>
          <ListItemNav>
            <Link to="/dashboard">Home</Link>
          </ListItemNav>
          <ListItemNav>
            <Link to="/leaderboard">Leaderboard</Link>
          </ListItemNav>
          <ListItemNav>
            <Link to="/newpoll">New Poll</Link>
          </ListItemNav>
          <ListItemNav>
            <button onClick={handleLogout}>Logout</button>
          </ListItemNav>
        </NavBarItems>
        <ButtonOpenMenu onClick={handleOpenMenu}>
          <FaBars />
        </ButtonOpenMenu>
      </MenuItems>
    </ContainerNavBar>
  );
}

export default connect()(NavBar);