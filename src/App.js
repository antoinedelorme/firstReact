import React from "react";
import "./styles.css";
import events from "./assets/fake_DB";

import SearchMovies from "./components/movies";
import ImageComponent from "./components/image";
import EventComponent from "./components/event";
import { Button, ButtonGroup } from "@material-ui/core";

export default function App() {
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
          <Button style={{ fontSize: "0.5em" }}>Histoire</Button>
          <Button style={{ fontSize: "0.5em" }}>Musique</Button>
          <Button style={{ fontSize: "0.5em" }}>Art</Button>
          <Button style={{ fontSize: "0.5em" }}>Sciences</Button>
          <Button style={{ fontSize: "0.5em" }}>Voyages</Button>
        </ButtonGroup>
      </div>

      <div className="eventsContainer">
        {events.map((event) => (
          <EventComponent key={event.id} event={event} />
        ))}
      </div>
      <h1>OK </h1>
    </div>
  );
}
