import React from 'react';
import { Route, Redirect, Link, Switch, } from "react-router-dom";
import SessionFormContainer from "./session_form/session_form_container";
import { AuthRoute } from "../util/route_util";

const App = () => (
  <div>
    <h1>expressr</h1>
    <Switch>
      <AuthRoute path="/login" component={SessionFormContainer} />
      <AuthRoute path="/signup" component={SessionFormContainer} />
    </ Switch>
  </div>

);    

export default App;
