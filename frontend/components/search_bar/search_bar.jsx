import React from "react";
import { Link, withRouter } from "react-router-dom";

class SearchBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: ''
    }

  }

  handleSubmit() {
    this.props.fetchUser(this.state.username)
  }

  render() {
    return (
      <div>
        <h3> hello </h3>
      </div>
    )
  }
}

export default SearchBar;
