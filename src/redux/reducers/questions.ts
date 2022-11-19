import { RECEIVE_QUESTIONS } from "redux/actions/questions";

interface questionsProps {
  type: string;
  questions: any;
}

export function questions(state: any = {}, action: questionsProps) {
  switch (action.type) {
    case RECEIVE_QUESTIONS:
      return {
        ...state,
        ...action.questions,
      };
    default:
      return state;
  }
}
