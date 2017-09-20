import React from "react";
import { Link, withRouter } from "react-router-dom";

class SessionForm extends React.Component {

  constructor(props) {
    super(props);

    this.state = { username: "", password: ""};
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

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
            <input type="text" value={this.state.email} onChange={this.update("email")} />
            <input type="password" value={this.state.password} onChange={this.update("password")} />

            <div>
             <input type="submit" />
           </ div>
        </form>
      </div>
    )
  }
}

export default withRouter(SessionForm);
