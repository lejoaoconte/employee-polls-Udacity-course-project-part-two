import { RECEIVE_QUESTIONS, ANSWER_QUESTION } from "redux/actions/questions";

interface questionsProps {
  type: string;
  questions: any;
  authedUser: string;
  qid: string;
  answer: string;
}

export function questions(state: any = {}, action: questionsProps) {
  switch (action.type) {
    case RECEIVE_QUESTIONS:
      return {
        ...state,
        ...action.questions,
      };
    case ANSWER_QUESTION:
      return {
        ...state,
        [action.qid]: {
          ...state[action.qid],
          [action.answer]: {
            ...state[action.qid][action.answer],
            votes: state[action.qid][action.answer].votes.concat(action.authedUser),
          },
        },
      };
    default:
      return state;
  }
}
