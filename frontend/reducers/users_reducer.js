import { RECEIVE_USER } from "../actions/receive_user";
import merge from "lodash/merge";

const UsersReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_USER:
      return merge({}, oldState, {[action.user.id]}: action.user});
    default:
    return oldState;
  }
};

export default UsersReducer;
