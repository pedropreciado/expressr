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
      modalIsOpen: false
    }

    this.openModel = this.openModel.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }



  openModel() {
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


  render() {

    return (
      <div>

        <div className="new-posts-container">
          <div onClick={this.openModel} id="text">
            text
          </div>
          <div onClick={this.openModel} id="photo">
            photo
          </div>
          <div onClick={this.openModel} id="">
            audio
          </div>
          <div onClick={this.openModel}>
            link
          </div>
          <div onClick={this.openModel}>
            video
          </div>
        </ div>

        <Modal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
          contentLabel="Post Image"
          className="modal"
          >
          <button onClick={this.closeModal} id="close-button">X</button>
          <PostFormContainer />
        </ Modal>

        <ul className="post-index">
          {
            this.props.posts.map((post) => (
              <PostIndexItem post={post} currentUser={this.props.currentUser}/>
            ))
          }
      </ul>

    </div>
    )
  }

}

export default PostIndex;
