import React from "react";
import Home from "./home";
import Nav from "./nav";
import Event from "./event";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route path="/" exact component={Home}></Route>
        <Route path="/event" component={Event}></Route>
      </Switch>
    </Router>
  );
}
