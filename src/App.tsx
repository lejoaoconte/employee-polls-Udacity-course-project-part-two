import { useEffect } from "react";

import { connect } from "react-redux";

import { Route, Routes } from "react-router-dom";

import { handleInitialData } from "redux/actions";

import Login from "pages/Login";
import Dashboard from "pages/Dashboard";

import PrivateRoute from "routes/PrivateRoute";
import Question from "pages/Question";
import NewQuestion from "pages/NewQuestion";

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
      <Route
        path="/question/:questionId"
        element={
          <PrivateRoute>
            <Question />
          </PrivateRoute>
        }
      />
      <Route
        path="/newpoll"
        element={
          <PrivateRoute>
            <NewQuestion />
          </PrivateRoute>
        }
      />
    </Routes>
  );
}

export default connect()(App);
