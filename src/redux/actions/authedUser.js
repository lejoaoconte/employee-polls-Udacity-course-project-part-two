export const SET_AUTHED_USER = "SET_AUTHED_USER";
export const LOGOUT_USER = "LOGOUT_USER";

export function logoutUser() {
  return {
    type: LOGOUT_USER,
  };
}

export function setAuthedUser(user) {
  return {
    type: SET_AUTHED_USER,
    user,
  };
}

export function onLoginUser(login, password) {
  return (dispatch, getState) => {
    const { users } = getState();
    const myUser = Object.values(users).find(
      (user) => user.id === login && user.password === password
    );

    if (!!myUser) {
      dispatch(setAuthedUser(myUser));
    }
  };
}
