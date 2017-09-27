import { RECEIVE_USER,  RECEIVE_USERS } from "../actions/users_actions";
import merge from "lodash/merge";

const UsersReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_USER:
      return merge({}, oldState, {[action.user.id]: action.user});
    case RECEIVE_USERS:
      return merge({}, action.users)
    default:
    return oldState;
  }
};

export default UsersReducer;
