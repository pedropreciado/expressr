import React from "react";
import { Link, withRouter } from "react-router-dom";

const options = (body, author, currentUser) => {


  if (author == currentUser) {
    return (
      <div className="post-options-match">
        <a>{body}</a>
        <div id="edit-delete">
          <a>{"edit"}</a>
          <a>{"delete"}</a>
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

const PostIndexItem = ({post, currentUser}) => {

  return (
    <div className="item-container">

      <div className="item-header">
        <a>{post.author.username}</a>
        <a>{post.title}</a>
      </ div>
    <br />
      <img className="post-img" src={post.url}/>
      <br/ >
        {options(post.body, post.author.username, currentUser.username)}
    </div>
  )
}

export default withRouter(PostIndexItem);
