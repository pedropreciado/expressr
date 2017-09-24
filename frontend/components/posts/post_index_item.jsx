import React from "react";
import { Link, withRouter } from "react-router-dom";

const options = (post, body, author, currentUser, deletePost) => {

  if (author == currentUser) {
    return (
      <div className="post-options-match">
        <a>{body}</a>
        <div id="edit-delete">
          <a>{"edit"}</a>
          <button onClick={() => deletePost(post.id)}>delete</button>
        </div>
      </div>
    )
  } else {
    return (
    <div className="post-options-other">
      <a>{body}</a>
    </div>
  )
  }
  closeModal;
}

const postContent = (post) => {

  if (post.content === "text") {
    return (
      <div className="item-content-text">
        {post.body}
      </div>
    )} else if (post.content === "img") {
      return (
      <img className="post-img" src={post.url}/>
    )
    }
  }

const PostIndexItem = ({post, currentUser, deletePost}) => {
  return (
    <div className="item-container">

      <div className="item-header">
        <a>{post.author.username}</a>
        <a>{post.title}</a>
      </ div>

        {postContent(post)}

        {options(post, post.body, post.author.username, currentUser.username, deletePost)}
    </div>
  )
}

export default withRouter(PostIndexItem);
