import React from "react";
import { Link, withRouter } from "react-router-dom";

class SessionForm extends React.Component {

  constructor(props) {
    super(props);

    this.state = { username: "username", email: "email", password: "password"};
    this.handleSubmit = this.handleSubmit.bind(this);
    this.clearField = this.clearField.bind(this);
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
      return (
        <label>
          <input type="text" value={this.state.username}
                             onChange={this.update("username")}
                              onClick={() => this.setState(this.clearField("username"))}  />
        </ label>
      )
    }
  }

  clearField(key) {
    return { [key]: "" }
  }

  guestLogin() {
    if (this.props.formType == "login") {
      return (
        <input type="submit"
                className="submit"
                onClick={() => this.setState({username: "guest", email: "null", password: 'thispassword'})}
                value="guest login"/>
      )
    }
  }

  render() {

    return (
      <div className="auth-page">
        <form onSubmit={this.handleSubmit}>
          <h1>expressr</h1>
          <h3>{this.props.formType}</h3>

          {this.errors()}

          {this.email_field()}
          <label>

            <input type="text" value={this.state.email}
              onChange={this.update("email")}
              onClick={() => this.setState(this.clearField("email"))} />
          </label>


            <label>
            <input type="text" value={this.state.password}
                                onChange={this.update("password")}
                                onClick={() => this.setState(this.clearField("password"))} />
            </ label>

            <div className="submit-buttons">
              <input type="submit" className="submit" value={this.props.formType}/>
              {this.guestLogin()}
            </ div>
        </form>
      </div>
    )
  }
}

export default withRouter(SessionForm);
