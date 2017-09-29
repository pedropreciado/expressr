// LIBS
import React from 'react';
import { Route, Redirect, Link, Switch, } from "react-router-dom";
import { AuthRoute, ProtectedRoute } from "../util/route_util";

// COMPONENTS
import SessionFormContainer from "./session_form/session_form_container";
import NavBarContainer from "./navbar/navbar_container";
import Footer from "./footer/footer";
import Splash from "./splash_page/splash";
import PostIndexContainer from "./posts/post_index_container";
import PostForm from "./posts/post_form";
import DiscoverContainer from "./discover/discover_container";
import UserShowContainer from "./user/user_show_container";

const App = () => (
  <div>
    <header className="nav-header">
      <h3>
      <Link to="/posts">
        <button className="logo">
          expressr
          </ button>
      </Link>
    </h3>
      <NavBarContainer />
    </header>
    <Switch>
      <AuthRoute path="/login" component={SessionFormContainer} />
      <AuthRoute path="/signup" component={SessionFormContainer} />
      <Route exact path="/users/:userId" component={UserShowContainer}/>
      <ProtectedRoute path="/discover" component={DiscoverContainer}/>
      <Switch>
        <ProtectedRoute path="/" component={PostIndexContainer}/>
        <Route exact path="/" component={SessionFormContainer} />
      </ Switch>
    </ Switch>
  </div>

);

export default App;


// <Footer />
// ADD FOOTER!!
