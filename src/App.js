import React from "react";
import "./styles.css";
import movieComponent from "./components/movies";

export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <movieComponent />
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
