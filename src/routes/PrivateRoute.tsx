import React, { ReactNode, useEffect } from "react";

import { connect } from "react-redux";

import { useNavigate } from "react-router-dom";

import NavBar from "components/NavBar";

interface PrivateRouteProps {
  children: ReactNode;
  loggedIn: boolean;
}

const PrivateRoute = ({ children, loggedIn }: PrivateRouteProps) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!loggedIn) {
      const redirectUrl = window.location.href
        .toString()
        .split(window.location.host)[1];
      navigate(`/?redirectTo=${redirectUrl}`);
    }
  }, [loggedIn, navigate]);

  return (
    <>
      <NavBar />
      {children}
    </>
  );
};

const mapStateToProps = ({ authedUser }: any) => ({
  loggedIn: !!authedUser,
});

export default connect(mapStateToProps)(PrivateRoute);
