import React from "react";

export default ({ event }) => {
  const style = {
    backgroundColor: "yellow",
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  };

  return (
    <div style={style}>
      <img
        style={{
          padding: "10px",
          maxWidth: "90%",
          height: "auto"
        }}
        className="eventImage"
        src={event.src}
        alt=""
      />
      <div style={{ color: "#079992" }}>
        <h1>{event.title1}</h1>
        <h1>{event.title2}</h1>
      </div>
    </div>
  );
};
