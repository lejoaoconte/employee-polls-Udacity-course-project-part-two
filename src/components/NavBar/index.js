import React, { useContext, useState } from "react";

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

function NavBar({ dispatch, authedUser }: any) {
  const navigate = useNavigate();
  const { setTheme, theme } = useContext(ContextDefaultTheme);
  const [openMenu, setOpenMenu] = useState(false);

  function handleLogout() {
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
    <ContainerNavBar data-testid="navbar-test">
      <img width={50} src="/logo.svg" alt="" />
      <MenuItems>
        <p>Hi, {authedUser?.name}</p>
        <Switch
          data-testid="navbar-switch-test"
          label="switch"
          onChange={handleChangeTheme}
          checked={theme}
        />
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
            <button
              data-testid="navbar-button-logout-test"
              onClick={handleLogout}
            >
              Logout
            </button>
          </ListItemNav>
        </NavBarItems>
        <ButtonOpenMenu
          data-testid="navbar-button-open-test"
          onClick={handleOpenMenu}
        >
          <FaBars />
        </ButtonOpenMenu>
      </MenuItems>
    </ContainerNavBar>
  );
}

function mapStateToProps({ authedUser }: any) {
  return {
    authedUser,
  };
}

export default connect(mapStateToProps)(NavBar);
