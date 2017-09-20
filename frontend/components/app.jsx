import React from 'react';
import { Route, Redirect, Link, Switch, } from "react-router-dom";
import SessionFormContainer from "./session_form/session_form_container";

const App = () => (
  <div>
    <h1>expressr</h1>
    <Switch>
      <Route path="/login" component={SessionFormContainer} />
      <Route path="/signup" component={SessionFormContainer} />
    </ Switch>
  </div>

);

export default App;
