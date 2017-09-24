import * as UserApiUtil from "../util/user_api_util";

export const RECEIVE_USER = "RECEIVE_USER";


export const fetchUser = (id) => (
  UserApiUtil.fetchUser.then((user) => recieveUser(user))
)

const receiveUser = (user) => ({
  type: RECEIVE_USER,
  user
})
