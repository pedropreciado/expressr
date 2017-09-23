import React from "react";
import PostIndexItem from "./post_index_item";
import PostForm from "./post_form";
import { Link } from "react-router-dom";
import PostFormContainer from "./post_form_container";
import Modal from "react-modal";

class PostIndex extends React.Component {

  componentDidMount() {
    this.props.fetchPosts();
  }


  render() {

    return (
      <div>
        <button onClick={this.openModal}>create post.</button>

        <ul className="post-index">
          {
            this.props.posts.map((post) => (
              <PostIndexItem post={post} currentUser={this.props.currentUser}/>
            ))
          }
      </ul>
        <PostForm />
    </div>
    )
  }

}

export default PostIndex;
