import { SET_AUTHED_USER, LOGOUT_USER } from "redux/actions/authedUser";

interface authedUserProps {
  type: string;
  user: string;
}

export function authedUser(state: any = null, action: authedUserProps) {
  switch (action.type) {
    case SET_AUTHED_USER:
      return action.user;
    case LOGOUT_USER:
      return null;
    default:
      return state;
  }
}
