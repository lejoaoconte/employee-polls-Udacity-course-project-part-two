export const SET_AUTHED_USER = "SET_AUTHED_USER";
export const LOGOUT_USER = "LOGOUT_USER";

export function logoutUser() {
  return {
    type: LOGOUT_USER,
  };
}

export function setAuthedUser(user: any) {
  return {
    type: SET_AUTHED_USER,
    user,
  };
}

export function onLoginUser(login: string, password: string) {
  return (dispatch: any, getState: any) => {
    const { users } = getState();
    const myUser = Object.values(users).find(
      (user: any) => user.id === login && user.password === password
    );

    if (!!myUser) {
      dispatch(setAuthedUser(myUser));
    }
  };
}
