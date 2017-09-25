import React from "react";
import { Link, withRouter } from "react-router-dom";
import SearchBar from "../search_bar/search_bar";


const displayName = (currentUser, logout) => (
  <navGroup className="nav-group">
    <h3 className="currentUser">{currentUser.username}</h3>
    <button onClick={logout}>logout</button>
  </navGroup>
)

const displayLinks = () => (
  <nav className="nav-SessionLinks">
    <Link to="/login"><button>login</ button></ Link>
    <Link to="/signup"><button>signup</ button></ Link>
  </nav>
)

const NavBar = ({currentUser, logout, fetchUser }) => {
  return (
    <div>
    <SearchBar fetchUser={fetchUser}/>
    {currentUser ? displayName(currentUser, logout) : displayLinks()}
  </div>
  )
};

export default NavBar;
