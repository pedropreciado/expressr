import React from "react";
import PostIndexItem from "../posts/post_index_item";

class UserShow extends React.Component {

  constructor(props) {
    super(props);


  }


  componentWillMount() {
    this.props.fetchUser(this.props.match.params.userId);
  }


  render () {
    if (!this.props.user) {
      return <div>loading...</div>
    }

    console.log(this.props);
    let author = this.props.user;
    let posts = this.props.user.posts.map((post) => {
          return {
          author,
          id: post.id,
          content: post.content,
          url: post.url,
          title: post.title,
          body: post.body
        }

    })

    return (
      <div>

        <ul>
          {
            posts.map((post) => (
              <PostIndexItem
                post={post}
                currentUser={this.props.currentUser}
                />
            ))
          }
        </ul>

      </div>
    )
  }

}

export default UserShow;
