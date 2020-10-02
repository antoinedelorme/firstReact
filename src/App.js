import React, { useState } from "react";
import "./styles.css";
import events from "./assets/fake_DB";

import SearchMovies from "./components/movies";
import ImageComponent from "./components/image";

import EventsContainer from "./components/eventsContainer";

import { Button, ButtonGroup } from "@material-ui/core";

export default function App() {
  const [filter, setFilter] = useState("");
  return (
    <div className="App">
      <SearchMovies />
      <div className="ContainerTitle">Pour vous</div>
      <div className="imagesContainer">
        {events.slice(0, 5).map((event) => (
          <ImageComponent key={event.id} event={event} />
        ))}
      </div>
      <div className="filtersContainer">
        <ButtonGroup
          size="large"
          color="primary"
          aria-label="large outlined primary button group"
        >
          <Button
            onClick={(localEvent) => {
              localEvent.preventDefault();
              setFilter("histoire");
            }}
            style={{ fontSize: "0.5em" }}
          >
            Histoire
          </Button>
          <Button style={{ fontSize: "0.5em" }}>Musique</Button>
          <Button style={{ fontSize: "0.5em" }}>Art</Button>
          <Button style={{ fontSize: "0.5em" }}>Sciences</Button>
          <Button style={{ fontSize: "0.5em" }}>Voyages</Button>
        </ButtonGroup>
      </div>
      <EventsContainer events={events} filter={filter} />

      <h1>OK </h1>
    </div>
  );
}
