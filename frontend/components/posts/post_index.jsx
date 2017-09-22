import React from "react";
import PostIndexItem from "./post_index_item";
import PostForm from "./post_form";
import { Link } from "react-router-dom";


class PostIndex extends React.Component {

  componentDidMount() {
    this.props.fetchPosts();
  }



  render() {

    return (
      <div>
        <ul className="post-index">
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

// PostIndex.defaultProps = {
//   post: {
//     id: "",
//     title: "",
//     body: "",
//     url: "",
//     content: "",
//     author_id: ""
//   }
// }

export default PostIndex;
