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
      formType: ""
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

  handleClick(formType) {
    this.setState({ formType })
    this.openModel();
  }

  render() {

    return (
      <div>

        <ul className="post-index">


        <Modal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
          contentLabel="Post Image"
          className="modal"
          >
          <button onClick={this.closeModal} id="close-button">close form.</button>
          <PostFormContainer formType={this.state.formType}/>
        </ Modal>

          {
            this.props.posts.map((post) => (
              <PostIndexItem post={post} deletePost={this.props.deletePost} currentUser={this.props.currentUser}/>
            ))
          }
          <div className="new-posts-container">
            <div onClick={() => this.handleClick("text")} className="new-post-button"id="text">
              text
            </div>
            <div onClick={() => this.handleClick("photo")} className="new-post-button"id="photo">
              photo
            </div>
            <div onClick={() => this.handleClick("audio")} className="new-post-button"id="audio">
              audio
            </div>
            <div onClick={() => this.handleClick("link")} className="new-post-button"id="link">
              link
            </div>
            <div onClick={() => this.handleClick("video")} className="new-post-button"id="video">
              video
            </div>
            </ div>
      </ul>

    </div>
    )
  }

}

export default PostIndex;
