import {
  _getUsers,
  _getQuestions,
  _saveQuestion,
  _saveQuestionAnswer,
} from "./_DATA";

export async function getInitialData() {
  const [users, questions] = await Promise.all([_getUsers(), _getQuestions()]);
  return {
    users,
    questions,
  };
}

export function saveQuestionAnswer(info: any) {
  return _saveQuestionAnswer(info);
}

export function saveQuestion(info: any) {
  return _saveQuestion(info);
}
