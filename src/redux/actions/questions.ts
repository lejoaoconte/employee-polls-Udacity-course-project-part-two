export const RECEIVE_QUESTIONS = "RECEIVE_QUESTIONS";

export function receiveQuestions(questions: any) {
  console.log(questions)
  return {
    type: RECEIVE_QUESTIONS,
    questions,
  };
}
