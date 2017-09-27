import { connect } from "react-redux";
import Discover from "./discover";
import { fetchUser, fetchUsers, followUser, unfollowUser } from "../../actions/users_actions";

const mapStateToProps = (state) => {
  console.log(state);
  return {
    users: Object.keys(state.users).map((id) => state.users[id]),
    currentUser: state.session.currentUser,
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchUsers: () => dispatch(fetchUsers()),
  fetchUser: (id) => dispatch(fetchUser(id)),
  followUser: (followee_id) => dispatch(followUser(followee_id)),
  unfollowUser: (followee_id) => dispatch(unfollowUser(followee_id))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Discover);
