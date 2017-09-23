import React from 'react';
import { Route, Redirect, Link, Switch, } from "react-router-dom";
import SessionFormContainer from "./session_form/session_form_container";
import { AuthRoute } from "../util/route_util";
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

      <AuthRoute path="/login" component={SessionFormContainer} />
      <AuthRoute path="/signup" component={SessionFormContainer} />
      <Route path="/posts" component={PostIndexContainer}/>
      <AuthRoute exact path="/" component={Splash} />
    </ Switch>
  </div>

);

export default App;


// ADD FOOTER!!
