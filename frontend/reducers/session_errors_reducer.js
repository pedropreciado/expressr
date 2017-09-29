import { RECEIVE_ERRORS, RECEIVE_CURRENT_USER, CLEAR_SESSION_ERRORS } from '../actions/session_actions';


export default (state = [], action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_ERRORS:
      return state;
    case RECEIVE_CURRENT_USER:
      return [];
    default:
      return state;
  }
};
