import React from "react";
import Home from "./home";
import Nav from "./nav";

import { BrowserRouter as Router, Switch } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <Nav />
      <Home />
    </Router>
  );
}
