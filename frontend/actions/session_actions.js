import * as SessionApiUtil from "../util/session_api_util";

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";

export const login = (user) => dispatch => (
  SessionApiUtil.login(user).then((user) => dispatch(receiveCurrentUser(user)))
)

export const logout = () => dispatch => (
  SessionApiUtil.logout().then((user) => (
  dispatch(receiveCurrentUser(user)))),
  err => dispatch(receiveErrors(err.responseJSON))
)

export const signup = (user) => dispatch => (
  SessionApiUtil.signup(user).then((user) => dispatch(receiveCurrentUser(user)))
)

const receiveCurrentUser = (currentUser) => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
})

const receiveErrors = errors => ({
  type: RECEIVE_SESSION_ERRORS,
  errors
});
