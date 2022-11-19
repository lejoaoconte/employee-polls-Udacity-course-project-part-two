export const RECEIVE_QUESTIONS = "RECEIVE_QUESTIONS";

export function receiveQuestions(questions: any) {
  return {
    type: RECEIVE_QUESTIONS,
    questions,
  };
}
