import { connect } from 'react-redux';
import PostIndex from "./post_index";
import { fetchPosts, deletePost, createPost } from "../../actions/post_actions";

const mapStateToProps = (state) => {
  console.log(state);
  return {
    posts: Object.keys(state.posts).map((id) => state.posts[id]),
    currentUser
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchPosts: () => dispatch(fetchPosts())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostIndex);
