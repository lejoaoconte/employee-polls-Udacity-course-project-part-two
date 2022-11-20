import { useEffect } from "react";

import { connect } from "react-redux";

import { Route, Routes } from "react-router-dom";

import { handleInitialData } from "redux/actions";

import Login from "pages/Login";
import Dashboard from "pages/Dashboard";

import PrivateRoute from "routes/PrivateRoute";

function App(props: any) {
  useEffect(() => {
    props.dispatch(handleInitialData());
  }, [props]);

  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route
        path="/dashboard"
        element={
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        }
      />
    </Routes>
  );
}

export default connect()(App);
