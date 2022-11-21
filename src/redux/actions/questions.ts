import { hideLoading, showLoading } from "react-redux-loading-bar";
import { saveQuestionAnswer } from "services/api";
import { AnswerUserQuestion } from "./users";

export const RECEIVE_QUESTIONS = "RECEIVE_QUESTIONS";
export const ANSWER_QUESTION = "ANSWER_QUESTION";

export function receiveQuestions(questions: any) {
  return {
    type: RECEIVE_QUESTIONS,
    questions,
  };
}

export function answerQuestion(
  authedUser: string,
  qid: string,
  answer: string
) {
  return {
    type: ANSWER_QUESTION,
    authedUser,
    qid,
    answer,
  };
}

export function handleAnswerQuestion(qid: string, answer: string) {
  return async (dispatch: any, getState: any) => {
    dispatch(showLoading())
    const { authedUser } = getState();
    const id = authedUser.id;
    await saveQuestionAnswer({ authedUser: id, qid, answer });
    dispatch(answerQuestion(authedUser.id, qid, answer));
    dispatch(AnswerUserQuestion(authedUser.id, qid, answer));
    dispatch(hideLoading())
  };
}
