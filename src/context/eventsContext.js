import React, { useState, createContext } from "react";
import eventsList from "../assets/fake_DB";

const EventsContext = createContext();

const EventsProvider = ({ children }) => {
  const [events, setEvents] = useState({ data: eventsList, switch: 0 });
  return (
    <EventsContext.Provider value={[events, setEvents]}>
      {children}
    </EventsContext.Provider>
  );
};

export { EventsContext, EventsProvider };
