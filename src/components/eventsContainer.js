import React from "react";
import EventComponent from "./event";

export default ({ events, filter }) => {
  console.log(filter);

  if (filter === "")
    return (
      <div className="eventsContainer">
        {events.map((event) => (
          <EventComponent key={event.id} event={event} />
        ))}
      </div>
    );
  else return <h1> tod</h1>;
};
