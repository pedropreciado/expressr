import { RECEIVE_USER,  RECEIVE_USERS, RECEIVE_LIKE, REMOVE_LIKE } from "../actions/users_actions";
import merge from "lodash/merge";

const UsersReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_USER:
      return merge({}, oldState, {[action.user.id]: action.user});
    case RECEIVE_USERS:
      return merge({}, action.users)
    case RECEIVE_LIKE:
      return merge({}, oldState, action)
    case REMOVE_LIKE:
      return merge({}, oldState, action)
    default:
    return oldState;
  }
};

export default UsersReducer;
