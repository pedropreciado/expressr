import React from "react";
import { Link, withRouter} from "react-router-dom";

const postContent = (post, likePost, unlikePost) => {
  let likeSetting = () => likePost(post.id);
  if (post.current_user_likes) {
    likeSetting = () => unlikePost(post.id);
  }

  if (post.content === "text") {

    return (
    <div className="discover-content-container">
        {post.body}
        <div onClick={likeSetting} className="overlay">
        {likes(post.current_user_likes)}
      </div>
      {post.likes}
    </ div>

  )} else if (post.content === "img") {
      return (
    <div className="discover-content-container">
      <img className="discover-post-img" src={post.url}/>
        <div onClick={likeSetting} className="overlay">
      {likes(post.current_user_likes)}
    </div>
    {post.likes}
    </ div>
    )
  }
}

const followStatus = (props) => {
  if (props.user.current_user_follows) {
    return (
      <div className="update-button" onClick={() => props.unfollowUser(props.user.id) && window.location.reload()}>unfollow</div>
    )
  } else {
    return (
    <div className="update-button" onClick={() => props.followUser(props.user.id) && window.location.reload()}>follow</div>
    )
  }
}

const likes = (currentUserLikes) => {
  if (currentUserLikes === true) {
    return (
      <p>click to unlike.</ p>
    )
  } else {
    return (
      <p>click to like.</ p>
    )
  }
}

const DiscoverItem = (props) => {
  console.log(props);

  return (
    <div  className="discover-posts-container">

      <div className="discover-item-header">
        <a>{`${props.user.username}`}</a>
        {followStatus(props)}
      </ div>
    <div>
      {
        postContent(props.user.post.post, props.likePost, props.unlikePost)
      }
    </div>


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
