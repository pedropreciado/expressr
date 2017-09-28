import React from "react";
import PostIndexItem from "./post_index_item";
import PostForm from "./post_form";
import { Link } from "react-router-dom";
import PostFormContainer from "./post_form_container";
import Modal from "react-modal";


class PostIndex extends React.Component {

  constructor(props) {
    super(props);


    this.state = {
      modalIsOpen: false,
      formType: "",
      edit: false,
      post: {
        content: "",
        title: "",
        body: "",
        url: ""
      }
    }

    this.openModel = this.openModel.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  openModel(formType) {
    this.setState({modalIsOpen: true})
  }

  afterOpenModal() {

  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }

  componentDidMount() {
    this.props.fetchPosts();
  }

  handleClick(formType, edit, post) {
    this.setState({ formType, edit, post })
    this.openModel();
  }

  render() {

    return (
      <div>


        <ul className="post-index">

          <Link to="/discover">
            <div id="discover-link">
              discover more.
            </div>
          </Link>

        <Modal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
          contentLabel="Post Image"
          className="modal"
          >
          <button onClick={this.closeModal} id="close-button">close form.</button>
          <PostFormContainer
            formType={this.state.formType}
            edit={this.state.edit}
            closeModal={this.closeModal}
            oldPost={this.state.post}
            />
        </ Modal>
        {console.log(this.props.posts)}
          {
            this.props.posts.map((post) => (
              <PostIndexItem
                post={post}
                deletePost={this.props.deletePost}
                currentUser={this.props.currentUser}
                likePost={this.props.likePost}
                unlikePost={this.props.unlikePost}
                currentUserLikes={post.current_user_likes}
                handleClick={this.handleClick}
                />
            ))
          }

          <div className="new-posts-container">
            <div onClick={() => this.handleClick("text")} className="new-post-button"id="text">
              text
            </div>
            <div onClick={() => this.handleClick("img")} className="new-post-button"id="photo">
              photo
            </div>
            </ div>
      </ul>

    </div>
    )
  }

}

export default PostIndex;


// <div onClick={() => this.handleClick("audio")} className="new-post-button"id="audio">
//   audio
// </div>
// <div onClick={() => this.handleClick("link")} className="new-post-button"id="link">
//   link
// </div>
// <div onClick={() => this.handleClick("video")} className="new-post-button"id="video">
//   video
// </div>
