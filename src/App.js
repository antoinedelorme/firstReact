import React from "react";
import Home from "./home";
import Nav from "./nav";
import Event from "./event";
import { EventsProvider } from "./context/eventsContext";
import Radium from "radium";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <EventsProvider>
        <Nav />
        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/event/:id" component={Event}></Route>
        </Switch>
      </EventsProvider>
    </Router>
  );
};

export default Radium(App);
