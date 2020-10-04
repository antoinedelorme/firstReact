import React from "react";
import Home from "./home";
import Nav from "./nav";
import Event from "./event";
import { EventsProvider } from "./context/eventsContext";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default function App() {
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
}
