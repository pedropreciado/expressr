import React from "react";
import { Link, withRouter } from "react-router-dom";

const PostIndexItem = ({post}) => {
  return (
    <div className="item-container">

      <div className="item-header">
        <a>{post.author.username}</a>
        <a>{post.title}</a>
      </ div>
    <br />
      <img className="post-img" src={post.url}/>
      <br/ >
    <a id="post-body">{post.body}</a>
    </div>
  )
}

export default withRouter(PostIndexItem);
