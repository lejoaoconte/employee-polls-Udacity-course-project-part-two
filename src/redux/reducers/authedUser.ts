import { SET_AUTHED_USER } from "redux/actions/authedUser";

interface authedUserProps {
  state: any;
  action: {
    type: string;
    id: string;
  };
}

export function authedUser({ state = null, action }: authedUserProps) {
  switch (action.type) {
    case SET_AUTHED_USER:
      return action.id;
    default:
      return state;
  }
}
