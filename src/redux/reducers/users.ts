import { RECEIVE_USERS } from "redux/actions/users";

interface usersProps {
  type: string;
  users: any;
}

export function users(state: any = {}, action: usersProps) {
  switch (action.type) {
    case RECEIVE_USERS:
      return {
        ...state,
        ...action.users,
      };
    default:
      return state;
  }
}
