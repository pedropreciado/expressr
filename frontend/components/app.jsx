import React from 'react';
import { Route, Redirect, Link, Switch, } from "react-router-dom";
import SessionFormContainer from "./session_form/session_form_container";
import { AuthRoute } from "../util/route_util";
import NavBarContainer from "./navbar/navbar_container";

const App = () => (
  <div>
    <header className="nav-header">
      <h3>
      <Link to="/">
          expressr
      </Link>
    </h3>
      <NavBarContainer />
    </header>
    <Switch>
      <AuthRoute path="/login" component={SessionFormContainer} />
      <AuthRoute path="/signup" component={SessionFormContainer} />
    </ Switch>
  </div>

);

export default App;
