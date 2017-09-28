import React from "react";
import { Link, withRouter} from "react-router-dom";

const postContent = (post, likePost, unlikePost, current_user_likes, likes) => {

  let likeSetting = () => likePost(post.id);
  if (current_user_likes === true) {
    likeSetting = () => unlikePost(post.id);
  }

  if (post.content === "text") {

    return (
    <div className="discover-content-container">
        {post.body}
    </ div>

  )} else if (post.content === "img") {
      return (
    <div className="discover-content-container">
      <img className="discover-post-img" src={post.url}/>
    </ div>
    )
  }
}

const followStatus = (props) => {
  if (props.user.followers.includes(props.currentUser.id)) {
    return (
      <div className="update-button" onClick={() => props.unfollowUser(props.user.id)}>unfollow</div>
    )
  } else {
    return (
    <div className="update-button" onClick={() => props.followUser(props.user.id)}>follow</div>
    )
  }
}

const liker = (currentUserLikes) => {
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

  return (
    <div  className="discover-posts-container">

      <div className="discover-item-header">
        <a>{`${props.user.username}`}</a>
        {followStatus(props)}
      </ div>
    <div>
      {
        postContent(props.user.post,
                    props.likePost,
                    props.unlikePost,
                    props.user.followers,
                    props.user.post.likes)
      }
    </div>
    <div className="post-options-other">
      <a>{props.user.post.likes} &#9825;</a>
      <a>{props.user.id}</a>
      <a>{props.user.post.id}</a>

    </div>
    </div>
  )
}

export default withRouter(DiscoverItem);


// <div onClick={likeSetting} className="overlay">
//   {liker(current_user_likes)}
// </div>


// <div onClick={likeSetting} className="overlay">
//     {liker(current_user_likes)}
//   </div>
