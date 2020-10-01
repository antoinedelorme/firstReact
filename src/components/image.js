import React from "react";

export default ({ event }) => {
  console.log(event);
  return (
    <div className="imageContainer">
      <img width="250px" height="250px" src={event.src} alt="" />
      <div className="top-right">{event.title1}</div>
    </div>
  );
};
