import React from 'react';
import { Route, Redirect, Link, Switch, } from "react-router-dom";
import SessionFormContainer from "./session_form/session_form_container";
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import NavBarContainer from "./navbar/navbar_container";
import Footer from "./footer/footer";
import Splash from "./splash_page/splash";
import PostIndexContainer from "./posts/post_index_container";
import PostForm from "./posts/post_form";

const App = () => (
  <div>
    <header className="nav-header">
      <h3>
      <Link to="/">
        <button className="logo">
          expressr
          </ button>
      </Link>
    </h3>
      <NavBarContainer />
    </header>
    <Switch>

      <ProtectedRoute exact path="/" component={Splash} />
      <AuthRoute path="/login" component={SessionFormContainer} />
      <AuthRoute path="/signup" component={SessionFormContainer} />
      <ProtectedRoute path="/posts" component={PostIndexContainer}/>
    </ Switch>
  </div>

);

export default App;


// <Footer />
// ADD FOOTER!!
