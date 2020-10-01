import React from "react";

export default ({ event }) => {
  console.log(event);
  return (
    <div className="imageContainer">
      <img width="250px" height="250px" src={event.src} alt="" />
      <div className="imageContainerBottom">toto tooto totototototototo</div>
      <div className="imageContainerTitle1">{event.title1}</div>
      <div className="imageContainerTitle2">{event.title2}</div>
    </div>
  );
};
