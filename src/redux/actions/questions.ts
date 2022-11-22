import { hideLoading, showLoading } from "react-redux-loading-bar";

import { saveQuestion, saveQuestionAnswer } from "services/api";

import { AnswerUserQuestion, newQuestionUSer } from "./users";
import { toast } from "react-toastify";

export const RECEIVE_QUESTIONS = "RECEIVE_QUESTIONS";
export const ANSWER_QUESTION = "ANSWER_QUESTION";
export const NEW_QUESTION = "NEW_QUESTION";

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

export function newQuestion(question: any) {
  return {
    type: NEW_QUESTION,
    question,
  };
}

export function handleAnswerQuestion(qid: string, answer: string) {
  return async (dispatch: any, getState: any) => {
    dispatch(showLoading());
    const { authedUser } = getState();
    const id = authedUser.id;
    await saveQuestionAnswer({ authedUser: id, qid, answer });
    dispatch(answerQuestion(authedUser.id, qid, answer));
    dispatch(AnswerUserQuestion(authedUser.id, qid, answer));
    dispatch(hideLoading());
    dispatch(() => toast.success("Thank you for vote!"));
  };
}

export function handleSaveQuestion(
  optionOneText: string,
  optionTwoText: string
) {
  return async (dispatch: any, getState: any) => {
    dispatch(showLoading());
    const { authedUser } = getState();
    const idUser = authedUser.id;
    const question: any = await saveQuestion({
      optionOneText,
      optionTwoText,
      author: idUser,
    });
    const idQuestion = question?.id;
    dispatch(newQuestion(question));
    dispatch(newQuestionUSer(idUser, idQuestion));
    dispatch(hideLoading());
    dispatch(() => toast.success("Poll saved!"));
  };
}
