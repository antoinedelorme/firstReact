import React, { useState, useEffect, useContext } from "react";
import ImageComponent from "./components/image";
import EventsContainer from "./components/eventsContainer";
import { Button, ButtonGroup } from "@material-ui/core";
import { EventsContext } from "./context/eventsContext";
import { Link } from "react-router-dom";
import {
  styleImagesContainer,
  styleFiltersContainer
} from "./styles/dynamicStyles";

import "./styles.css";

const buttonStyle = {
  fontSize: "0.5em",
  marginTop: "10px",
  marginBottom: "10px"
};

const Main = () => {
  const [events, setEvents] = useContext(EventsContext);

  const { version } = events;
  const [filter, setFilter] = useState("");
  useEffect(() => {});
  return (
    <div className="App">
      {/* <SearchMovies /> */}
      <div className="ContainerTitle">Pour vous</div>

      <div style={styleImagesContainer[events.version]}>
        {events.data.slice(0, 4).map((event) => (
          <Link
            to={`/event/${event.id}`}
            style={{
              flex: 4,
              border: "none",
              textDecoration: "none"
            }}
          >
            <ImageComponent key={event.id} event={event} />
          </Link>
        ))}
      </div>

      <div style={styleFiltersContainer[version]}>
        <ButtonGroup
          size="large"
          color="primary"
          aria-label="large outlined primary button group"
          variant="outlined"
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
