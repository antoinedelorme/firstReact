import React from "react";
import EventComponent from "./event";

export default ({ events, filter }) => {
  console.log(filter);

  if (filter === "")
    return (
      <div className="eventsContainer">
        {events.data
          .slice()
          .sort((a, b) => a.date - b.date)
          .map((event) => (
            <EventComponent key={event.id} event={event} />
          ))}
      </div>
    );
  else
    return (
      <div className="eventsContainer">
        {events
          .filter((event) => {
            return event.type === filter;
          })
          .sort((a, b) => {
            return a.date - b.date;
          })
          .map((event) => (
            <EventComponent key={event.id} event={event} />
          ))}
      </div>
    );
};
