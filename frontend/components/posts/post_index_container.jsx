import { connect } from 'react-redux';
import PostIndex from "./post_index";
import { fetchPosts, deletePost, createPost } from "../../actions/post_actions";

const mapStateToProps = (state) => {

    return {
    posts: Object.keys(state.posts).map((id) => state.posts[id]),
    currentUser: state.session.currentUser
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchPosts: () => dispatch(fetchPosts()),
  deletePost: (post) => dispatch(deletePost(post)),
  updatePost: (post) => dispatch(updatePost(post))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostIndex);
