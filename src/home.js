import React, { useState, useEffect } from "react";
import SearchMovies from "./components/movies";
import events from "./assets/fake_DB";
import ImageComponent from "./components/image";
import EventsContainer from "./components/eventsContainer";
import { Button, ButtonGroup } from "@material-ui/core";
import "./styles.css";
const buttonStyle = {
  fontSize: "0.5em",
  color: "#ffffff",
  backgroundColor: "#40407a"
};

const Main = () => {
  const [filter, setFilter] = useState("");
  useEffect(() => {});
  return (
    <div className="App">
      {/* <SearchMovies /> */}
      <div className="ContainerTitle">Pour vous</div>

      <div className="imagesContainer">
        {events.slice(0, 4).map((event) => (
          <ImageComponent key={event.id} event={event} />
        ))}
      </div>

      <div className="filtersContainer">
        <ButtonGroup
          size="large"
          color="primary"
          aria-label="large outlined primary button group"
        >
          <Button onClick={() => setFilter("")} style={buttonStyle}>
            Tout
          </Button>
          <Button onClick={() => setFilter("histoire")} style={buttonStyle}>
            Histoire
          </Button>
          <Button onClick={() => setFilter("musique")} style={buttonStyle}>
            Musique
          </Button>
          <Button onClick={() => setFilter("art")} style={buttonStyle}>
            Art
          </Button>
          <Button onClick={() => setFilter("sciences")} style={buttonStyle}>
            Sciences
          </Button>
          <Button onClick={() => setFilter("voyages")} style={buttonStyle}>
            Voyages
          </Button>
        </ButtonGroup>
      </div>
      <EventsContainer events={events} filter={filter} />
    </div>
  );
};

export default () => {
  return <Main />;
};
