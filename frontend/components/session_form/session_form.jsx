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

  // navLinks() {
  //   if (this.props.formType == "login") {
  //     return <Link to="/signup">sign up</ Link>
  //   } else {
  //     return <Link to="/login">log in</ Link >
  //   }
  // }
  //
  errors() {
    return (
      <ul>
        {
          this.props.errors.map((errors) => (
            <li>{error}</li>
          ))
        }
        </ ul>
    )
  }

  email_field() {
    if (this.props.formType == "signup") {
      return <label>
                <input type="text" value="email" onChange={this.update("email")} />
              </label>
    }
  }

  render() {

    return (
      <div className="auth-page">
        <form onSubmit={this.handleSubmit}>
          <h2>expressr</h2>
          <h3>{this.props.formType}</h3>

          {this.errors()}

          {this.email_field()}
          <label>
            <input type="text" value="username" onChange={this.update("username")} />
          </ label>

            <label>
            <input type="text" value="password" onChange={this.update("password")} />
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
