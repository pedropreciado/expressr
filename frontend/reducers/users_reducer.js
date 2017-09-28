import { RECEIVE_USER,
        RECEIVE_USERS,
        RECEIVE_LIKE,
        REMOVE_LIKE,
        RECEIVE_FOLLOW,
        REMOVE_FOLLOW } from "../actions/users_actions";
import merge from "lodash/merge";

const UsersReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_USER:
      return merge({}, oldState, {[action.user.id]: action.user});
    case RECEIVE_USERS:
      return merge({}, action.users);
    case RECEIVE_LIKE:
      return merge({}, oldState, action);
    case REMOVE_LIKE:
      return merge({}, oldState, action);
    case RECEIVE_FOLLOW:
      let newState =  merge({}, oldState, action);
      console.log(newState);
      return newState
    case REMOVE_FOLLOW:
      let thisState =  merge({}, oldState, action);
      console.log(thisState);
      return thisState
    default:
    return oldState;
  }
};

export default UsersReducer;
