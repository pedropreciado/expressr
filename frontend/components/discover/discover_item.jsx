import React from "react";
import { Link, withRouter} from "react-router-dom";

const postContent = (post) => {

  if (post.content === "text") {

    return (
    <div className="content-container">
        {post.body}

    </ div>

  )} else if (post.content === "img") {
      return (
    <div className="content-container">
      <img className="discover-post-img" src={post.url}/>
    </ div>
    )
  }
}

const followStatus = (props) => {
  if (props.user.current_user_follows) {
    return (
      <div className="update-button" onClick={() => props.unfollowUser(props.user.id) && window.location.reload()}>click to unfollow.</div>
    )
  } else {
    return (
    <div className="update-button" onClick={() => props.followUser(props.user.id) && window.location.reload()}>click to follow.</div>
    )
  }
}


const DiscoverItem = (props) => {
  console.log(props);
  return (
    <div className="item-container">

      <div className="discover-item-header">
        <a>{`${props.user.username}'s posts`}</a>
      </ div>
    <div className="discover-posts-container">
      {
        props.user.posts.map((post) =>
        postContent(post)
      )
      }
    </div>

    {followStatus(props)}

    </div>
  )
}

export default withRouter(DiscoverItem);






// <div className="item-header">
//   <a>{props.user.username}</a>
// </div>
// <div className="user-posts-container">
//   {
//     props.posts.map((post) => (
//       <div className="post-content">{postContent(post)}</div>
//     ))
//   }
//   </ div>
//   {options(props)}
