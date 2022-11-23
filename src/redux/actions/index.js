import { getInitialData } from "services/api";

import { receiveQuestions } from "./questions";
import { receiveUsers } from "./users";

import { showLoading, hideLoading } from "react-redux-loading-bar";

export function handleInitialData() {
  return async (dispatch) => {
    dispatch(showLoading());
    const { users, questions } = await getInitialData();
    dispatch(receiveUsers(users));
    dispatch(receiveQuestions(questions));
    dispatch(hideLoading());
  };
}
