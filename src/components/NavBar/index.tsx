import { connect } from "react-redux";

import { Link, useNavigate } from "react-router-dom";

import { logoutUser } from "redux/actions/authedUser";

import { ContainerNavBar, ListItemNav, NavBarItems } from "./styles";

export function NavBar({ dispatch }: any) {
  const navigate = useNavigate();

  function handleLogout() {
    localStorage.removeItem("authedUser");
    dispatch(logoutUser());
    navigate("/");
  }

  return (
    <ContainerNavBar>
      <img width={50} src="/logo.svg" alt="" />
      <NavBarItems>
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
    </ContainerNavBar>
  );
}

export default connect()(NavBar);
