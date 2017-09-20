import React from "react";
import { Link, withRouter } from "react-router-dom";

class SessionForm extends React.Component {

  constructor(props) {
    super(props);

    this.state = { username: "", email: "", password: ""};
    this.handleSubmit = this.handleSubmit.bind(this);

  };

  update(key) {
    return (event) => {
      this.setState({[key]: event.target.value});
    }
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.action(this.state);
  }

  navLinks() {
    if (this.props.formType == "login") {
      return <Link to="/signup">sign up</ Link>
    } else {
      return <Link to="/login">log in</ Link >
    }
  }

  username_field() {
    if (this.props.formType == "signup") {
      return <label>
              email:
                <input type="text" value={this.state.email} onChange={this.update("email")} />
              </label>
    }
  }

  render() {

    return (
      <div>
        <h1>{this.props.formType} Page</h1>
        <form onSubmit={this.handleSubmit}>
          {this.navLinks()}
          <br />
          {this.username_field()}
          <br />
          <label>
            username:
            <input type="text" value={this.state.username} onChange={this.update("username")} />
          </ label>
            <br />
            <label>
              password:
            <input type="text" value={this.state.password} onChange={this.update("password")} />
            </ label>

            <div>
              <input type="submit" />
           </ div>
        </form>
      </div>
    )
  }
}

export default withRouter(SessionForm);
