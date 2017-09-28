import { fetchUser } from "../../actions/user_actions";
import { connect } from "react-redux";
import UserShow from "./user_show";

const mapStateToProps = (state, ownProps) => {
  return {
    user: state.users[ownProps.match.params.userId]
  }
}

const mapDispatchToProps = ()
