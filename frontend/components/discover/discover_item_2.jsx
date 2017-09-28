import React from "react";

class DiscoverItem extends React.Component {
  constructor(props) {
    super(props);

    let included = false;
    props.user.followers.forEach((follow) => {
      if (follow.follower_id === props.currentUser.id) {
        included = true;
      }
    })
    let action;
    if (included) {
      action = props.unfollowUser(props.user.id);
    } else {
      action = props.followUser(props.user.id)
    }

    this.state = {
      action: action
    }

    this.handleClick = this.handleClick.bind(this);
    this.followButton = this.followButton.bind(this);
  }

  handleClick(event) {
    event.preventDefault();

    if (this.state.followStatus === props.unfollowUser) {
      this.state.followStatus();
      this.setState({followStatus: () => this.props.followUser(this.props.user.id)})
    } else {
      this.state.followStatus();
      this.setState({followStatus: () => this.props.unfollowUser(this.props.user.id)})
    }
  }

  followButton() {
    if (this.state.action === followUser {
      return (
        <div className="update-button"
              onClick={this.handleClick}>follow</div>
      )
    } else {
      <div className="update-button"
           onClick={this.handleClick}>unfollow</div>
    }
  }

  render() {

    return (
      <div  className="discover-posts-container">

        <div className="discover-item-header">
          <a>{`${this.props.user.username}`}</a>
          {this.followButton()}
        </ div>

      <div className="post-options-other">
        <a>{this.props.user.post.likes} &#9825;</a>
      </div>
      </div>
    )

  }
}

export default DiscoverItem;
