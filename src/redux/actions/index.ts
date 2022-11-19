import { getInitialData } from "services/api";
import { setAuthedUser } from "./authedUser";
import { receiveQuestions } from "./questions";
import { receiveUsers } from "./users";

const AUTHED_ID = "tylermcginnis";

export function handleInitialData() {
  return async (
    dispatch: (args: {
      type: string;
      users?: any;
      questions?: any;
      id?: string;
    }) => void
  ) => {
    const { users, questions } = await getInitialData();
    dispatch(receiveUsers(users));
    dispatch(receiveQuestions(questions));
    dispatch(setAuthedUser(AUTHED_ID));
  };
}
