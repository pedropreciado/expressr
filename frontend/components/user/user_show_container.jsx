import { fetchUser } from "../../actions/users_actions";
import { connect } from "react-redux";
import UserShow from "./user_show";

const mapStateToProps = (state, ownProps) => {

  return {
    user: state.users[ownProps.match.params.userId],
    currentUser: state.session.currentUser
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchUser: (id) => dispatch(fetchUser(id))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserShow);
