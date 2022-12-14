import React, { FormEvent, useEffect } from "react";

import { connect } from "react-redux";

import { useNavigate } from "react-router-dom";

import { onLoginUser, setAuthedUser } from "redux/actions/authedUser";

import { Button } from "components/Button";
import { Input } from "components/Input";

import { ContainerLogin, FormArea } from "./styles";

function Login({ dispatch, loggedIn, authedUser }: any) {
  const navigate = useNavigate();

  useEffect(() => {
    if (loggedIn) {
      localStorage.setItem("authedUser", JSON.stringify(authedUser));
      const urlParams = new URLSearchParams(window.location.search);
      const redirectUrl = urlParams.get("redirectTo");
      navigate(redirectUrl ? redirectUrl : "/dashboard");
    } else {
      const user = localStorage.getItem("authedUser");
      if (user !== null) dispatch(setAuthedUser(JSON.parse(user)));
    }
  }, [loggedIn, navigate, authedUser, dispatch]);

  function handleLogin(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    dispatch(
      onLoginUser(
        e.currentTarget["login"].value,
        e.currentTarget["password"].value
      )
    );
  }

  return (
    <ContainerLogin>
      <img width={120} src="/logo.svg" alt="" />
      <FormArea onSubmit={handleLogin}>
        <Input name="login" label="Login" required />
        <Input type="password" name="password" label="Password" required />
        <Button type="submit" label="Login" />
      </FormArea>
    </ContainerLogin>
  );
}

function mapStateToProps({ authedUser }: any) {
  return {
    loggedIn: !!authedUser,
    authedUser,
  };
}

export default connect(mapStateToProps)(Login);
