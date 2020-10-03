import React from "react";

import { Link } from "react-router-dom";

export default () => {
  const mainContainerStyle = {
    display: "flex",
    justifyContent: "evenly-spaced"
  };
  const leftContainerStyle = {
    backgroundColor: "#d1ccc0",
    flex: 2,
    height: "300px",
    margin: "10em"
  };
  const rightContainerStyle = {
    backgroundColor: "#d1ccc0",
    flex: 3,
    height: "300px",
    margin: "10px"
  };

  return (
    <div style={mainContainerStyle}>
      <div style={leftContainerStyle}>
        <h1>LEFT</h1>
      </div>
      <div style={rightContainerStyle}>
        {" "}
        <h1>RIGHT</h1>
      </div>
    </div>
  );
};
