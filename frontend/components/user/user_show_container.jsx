import { fetchUser, followUser, unfollowUser } from "../../actions/users_actions";
import { likePost, unlikePost } from "../../actions/post_actions";
import { connect } from "react-redux";
import UserShow from "./user_show";

const mapStateToProps = (state, ownProps) => {

  return {
    user: state.users[ownProps.match.params.userId],
    currentUser: state.session.currentUser
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchUser: (id) => dispatch(fetchUser(id)),
    followUser: (followee_id) => dispatch(followUser(followee_id)),
    unfollowUser: (followee_id) => dispatch(unfollowUser(followee_id)),
    likePost: (post_id) => dispatch(likePost(post_id)),
    unlikePost: (post_id) => dispatch(unlikePost(post_id))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserShow);
