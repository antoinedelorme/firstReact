import React, { useContext } from "react";
import { EventsContext } from "./context/eventsContext";
import EventLeftItem from "./eventLeftItem";

export default ({ match }) => {
  const [events, setEvents] = useContext(EventsContext);
  const eventId = match.params.id;
  const event = events.find((x) => x.id === eventId);
  const mainContainerStyle = {
    display: "flex",
    justifyContent: "evenly-spaced",
    backgroundColor: "#f1f2f6"
  };
  const leftContainerStyle = {
    flex: 2,
    height: "300px",
    marginTop: "3em",
    marginLeft: "5em",
    marginRight: "2.5em"
  };
  const rightContainerStyle = {
    backgroundColor: "#dfe4ea",
    flex: 5,
    height: "300px",
    marginTop: "3em",
    marginRight: "5em",
    marginLeft: "2.5em"
  };

  return (
    <div style={mainContainerStyle}>
      <div style={leftContainerStyle}>
        <EventLeftItem event={event} />
      </div>
      <div style={rightContainerStyle}>
        <h1>{event.title1}</h1>
      </div>
    </div>
  );
};
