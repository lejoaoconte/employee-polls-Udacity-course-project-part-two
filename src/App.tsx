import { useEffect } from "react";

import { connect } from "react-redux";

import { Route, Routes } from "react-router-dom";

import { handleInitialData } from "redux/actions";

import Login from "pages/Login";
import Dashboard from "pages/Dashboard";

import PrivateRoute from "routes/PrivateRoute";
import Question from "pages/Question";
import NewQuestion from "pages/NewQuestion";
import Leaderboard from "pages/Leaderboard";
import Error404 from "pages/Error404";

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
      <Route
        path="/leaderboard"
        element={
          <PrivateRoute>
            <Leaderboard />
          </PrivateRoute>
        }
      />
      <Route path="*" element={<Error404 />} />
    </Routes>
  );
}

export default connect()(App);
