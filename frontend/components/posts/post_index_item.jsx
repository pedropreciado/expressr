import React from "react";
import { Link, withRouter } from "react-router-dom";

const options = (post, body, author, currentUser, deletePost) => {

  console.log(post);

  if (author == currentUser) {
    return (
      <div className="post-options-match">
        <a>{body}</a>
        <div id="edit-delete">
          <a>{"edit"}</a>
          <button onClick={() => deletePost(post)}>delete</button>
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
}

const PostIndexItem = ({post, currentUser, deletePost}) => {

  return (
    <div className="item-container">

      <div className="item-header">
        <a>{post.author.username}</a>
        <a>{post.title}</a>
      </ div>
      <img className="post-img" src={post.url}/>
        {options(post, post.body, post.author.username, currentUser.username, deletePost)}
    </div>
  )
}

export default withRouter(PostIndexItem);
