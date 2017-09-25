import React from "react";
import { Link, withRouter } from "react-router-dom";

const options = (props) => {


  if (props.post.author.id == props.currentUser.id) {

    return (
      <div className="post-options-match">
        <a>{props.post.body}</a>
        <a>{props.post.likes} likes</a>
        <div id="edit-delete">
          <a>{"edit"}</a>
          <button onClick={() => props.deletePost(props.post.id)}>delete</button>
        </div>
      </div>
    )
  } else {
    return (
    <div className="post-options-other">
      <a>{props.post.body}</a>
      <a>{props.post.likes} likes</a>
    </div>
  )
  }
  closeModal;
}



const postContent = (props) => {

  let likeSetting = () => props.likePost(props.post.id);
  if (props.post.current_user_likes) {
    likeSetting = () => props.unlikePost(props.post.id);
  }

  if (props.post.content === "text") {

    return (
    <div className="content-container">
      <div className="item-content-text">
        {props.post.body}
      </div>
      <div onClick={likeSetting} className="overlay">
        <p>click to {() => likes(props.post.current_user_likes)}.</p>
        </ div>
    </ div>



    )} else if (props.post.content === "img") {
      return (
    <div className="content-container">
      <img className="post-img" src={props.post.url}/>
      <div onClick={likeSetting} className="overlay">
        <p>click to {() => likes(props.post.current_user_likes)}.</p>
        </ div>
    </ div>
    )
    }
  }

const likes = (currentUserLikes) => {
  if (currentUserLikes === true) {
    return ("unlike")
  } else {
    return ("like")
  }
}

const PostIndexItem = (props) => {
  return (
    <div className="item-container">

      <div className="item-header">
        <a>{props.post.author.username}</a>
        <a>{props.post.title}</a>
      </ div>

        {postContent(props)}

        {options(props)}
    </div>
  )
}

export default withRouter(PostIndexItem);
