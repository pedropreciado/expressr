import { connect } from 'react-redux';
import PostIndex from "./post_index";
import { fetchPost, deletePost, createPost } from "../../actions/post_actions";

const mapStateToProps = (state) => ({
  posts: Object.keys(state.posts).map(id => state.posts[id])
})

const mapDispatchToProps = (dispatch) => ({
  fetchPosts: dispatch(fetchPosts()),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostIndex);
