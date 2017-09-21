import React from "react";
import PostIndexItem from "./post_index_item";
import PostForm from "./post_form";
import PostIndexItem from "./post_index_item";
import { Link } from "react-router-dom";


class PostIndex extends React.Component {

  componentDidMount() {
    this.props.fetchPosts();
  }

  render() {

    return (
      <div>
        <ul>
          {
            this.props.posts.map((post) => (
              <PostIndexItem post={post} />
            ))
          }
      </ul>
      </div>
    )
  }

}
