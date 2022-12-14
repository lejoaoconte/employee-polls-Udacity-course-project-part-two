import {
  ANSWER_USER_QUESTION,
  RECEIVE_USERS,
  USER_NEW_QUESTION,
} from "redux/actions/users";

interface usersProps {
  type: string;
  users: any;
  qid: string;
  authedUser: string;
  answer: string;
}

export function users(state: any = {}, action: usersProps) {
  switch (action.type) {
    case RECEIVE_USERS:
      return {
        ...state,
        ...action.users,
      };
    case ANSWER_USER_QUESTION:
      return {
        ...state,
        [action.authedUser]: {
          ...state[action.authedUser],
          answers: {
            ...state[action.authedUser].answers,
            [action.qid]: action.answer,
          },
        },
      };
    case USER_NEW_QUESTION:
      return {
        ...state,
        [action.authedUser]: {
          ...state[action.authedUser],
          questions: state[action.authedUser].questions.concat(action.qid),
        },
      };
    default:
      return state;
  }
}
