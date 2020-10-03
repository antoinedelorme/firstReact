import React from "react";

import { Link } from "react-router-dom";

export default (data) => {
  const mainContainerStyle = {
    display: "flex",
    justifyContent: "evenly-spaced"
  };
  const leftContainerStyle = {
    backgroundColor: "#d1ccc0",
    flex: 2,
    height: "300px",
    marginTop: "3em",
    marginLeft: "5em",
    marginRight: "2.5em"
  };
  const rightContainerStyle = {
    backgroundColor: "#d1ccc0",
    flex: 3,
    height: "300px",
    marginTop: "3em",
    marginRight: "5em",
    marginLeft: "2.5em"
  };

  return (
    <div style={mainContainerStyle}>
      <div style={leftContainerStyle}>
        <h1>TEST</h1>
      </div>
      <div style={rightContainerStyle}>
        {" "}
        <h1>RIGHT</h1>
      </div>
    </div>
  );
};
