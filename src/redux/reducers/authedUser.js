import { SET_AUTHED_USER, LOGOUT_USER } from "redux/actions/authedUser";

export function authedUser(state = null, action) {
  switch (action.type) {
    case SET_AUTHED_USER:
      return action.user;
    case LOGOUT_USER:
      return null;
    default:
      return state;
  }
}
