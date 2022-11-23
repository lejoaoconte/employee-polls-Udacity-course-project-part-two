export const RECEIVE_USERS = "RECEIVE_USERS";
export const ANSWER_USER_QUESTION = "ANSWER_USER_QUESTION";
export const USER_NEW_QUESTION = "USER_NEW_QUESTION";

export function receiveUsers(users: any) {
  return {
    type: RECEIVE_USERS,
    users,
  };
}

export function AnswerUserQuestion(
  authedUser: string,
  qid: string,
  answer: string
) {
  return {
    type: ANSWER_USER_QUESTION,
    authedUser,
    qid,
    answer,
  };
}

export function newQuestionUSer(authedUser: string, qid: string) {
  return {
    type: USER_NEW_QUESTION,
    authedUser,
    qid,
  };
}
