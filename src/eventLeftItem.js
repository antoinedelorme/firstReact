import React from "react";
import Button from "@material-ui/core/Button";
export default ({ event }) => {
  const style = {
    backgroundColor: "white"
  };

  return (
    <div style={style}>
      <div
        style={{
          padding: "20px",
          display: "flex",
          flexDirection: "column"
        }}
      >
        <img
          style={{
            padding: "20px",
            maxWidth: "100%",
            height: "auto"
          }}
          className="eventImage"
          src={event.src}
          alt=""
        />
        <div
          style={{
            color: "#079992",
            fontSize: "1.2em",
            marginLeft: "1em",
            fontWeight: "bold",
            textAlign: "left"
          }}
        >
          <div>{event.title1}</div>
          <div style={{ fontWeight: "normal", fontSize: "1em" }}>
            {event.title2}
          </div>
        </div>
        <div
          style={{
            color: "#57606f",
            fontSize: "1em",
            marginTop: "1em",
            marginLeft: "1em",
            fontWeight: "thin",
            textAlign: "left"
          }}
        >
          20 octobre 2002
        </div>
      </div>
      <div
        style={{
          padding: "20px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-evenly",
          alignItems: "center"
        }}
      >
        <div
          style={{
            display: "flex",
            width: "100%",
            justifyContent: "space-around",
            flexFlow: "row nowrap",
            alignItems: "stretch",
            backgroundColor: "yellow"
          }}
        >
          <div style={{ flexGrow: 1, backgroundColor: "blue" }}>TEST</div>
          <div style={{ flexGrow: 1, backgroundColor: "red" }}>TEST</div>
        </div>
        <Button
          style={{ margin: "20px", width: "100%" }}
          variant="contained"
          color="primary"
        >
          Inscription
        </Button>
      </div>
    </div>
  );
};
