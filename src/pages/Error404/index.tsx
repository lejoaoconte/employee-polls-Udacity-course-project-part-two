import React from "react";

import { connect } from "react-redux";

import { useNavigate } from "react-router-dom";

import { Button } from "components/Button";

import { Error404Container } from "./styles";

function Error404() {
  const navigate = useNavigate();

  return (
    <Error404Container>
      <img src="/sorry.png" alt="not-found" />
      <Button
        label="Please, leave out of here!"
        type="button"
        onClick={() => navigate("/")}
      />
    </Error404Container>
  );
}

export default connect()(Error404);
