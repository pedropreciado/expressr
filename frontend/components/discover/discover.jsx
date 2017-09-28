import React from "react";
import DiscoverItem from "./discover_item";

class Discover extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchUsers();
  }

  render() {
    return (
      <div>
        <ul className="user-index">
          {
            this.props.users.map((user) => (
              <DiscoverItem
                user={user}
                followUser={this.props.followUser}
                unfollowUser={this.props.unfollowUser}
                likePost={this.props.likePost}
                unlikePost={this.props.unlikePost}
                />
            ))
          }
        </ul>
        </ div>
    )
  }

}

export default Discover;
