import React from "react";
import Dropzone from "react-dropzone";
import request from "superagent";
import merge from "lodash/merge";

const CLOUDINARY_UPLOAD_PRESET = 'gi1vnekd';
const CLOUDINARY_UPLOAD_URL = ' https://api.cloudinary.com/v1_1/dj6qsjknw/image/upload';

class PostForm extends React.Component {

  constructor(props) {
    super(props);

    console.log(props.formType);

    this.state = {
      uploadedFileCloudinaryUrl: "",
      post: {
        content: "",
        title: "",
        body: "",
        url: "",
        author: ""
      }
    };

    (this.state);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.createPost(this.state.post).then(() => this.props.history.push("/"))
  }

  update(key) {

    return (event) => {
      event.preventDefault();
      this.setState({
        post: merge(
          {}, this.state.post, {
            [key]: event.target.value
          }
        )
      })
    }
  }

  onImageDrop(files) {
    this.setState({
      uploadedFile: files[0]
    });

    this.handleImageUpload(files[0]);
  }

  handleImageUpload(file) {
    let upload = request.post(CLOUDINARY_UPLOAD_URL)
                            .field('upload_preset', CLOUDINARY_UPLOAD_PRESET)
                            .field('file', file);
    upload.end((err, response) => {
      if (err) {
        (err);
      }
      if (response.body.secure_url !== '') {
        this.setState({
          uploadedFileCloudinaryUrl: response.body.secure_url,
          post: merge(
            {}, this.state.post, {
              url: response.body.secure_url,
              author: currentUser,
              content: "img"
            }
          )
        });
      }
    });
  }

  render() {
    return (
    <div className="post-form-container">
      <form onSubmit={this.handleSubmit} className="modal-form">
        <h2 id="form-header">upload an image.</h2>

          <input type="text"
            value={this.state.post.title}
            onChange={this.update("title")}
            placeholder="title"
            className="input"
            />

        <div>
            {this.state.uploadedFileCloudinaryUrl === '' ? "" :
              <div>
                <img className="submitted-photo"
                  src={this.state.uploadedFileCloudinaryUrl} />
              </div>}
            </div>

        <Dropzone
          multiple={false}
          accept="image/*"
          onDrop={this.onImageDrop.bind(this)}
          className="dropzone"
          >
          <p> drop an image or click to select a file to upload.</ p>
            </ Dropzone>


          <input type="text"
            value={this.state.post.body}
            onChange={this.update("body")}
            placeholder="caption"
            />

          <input type="submit" className="submit" value="post image"/>
      </ form>
    </div>
    )
  }
}

export default PostForm;
