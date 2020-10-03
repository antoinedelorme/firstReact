import React, { useState, useEffect } from "react";
import "./styles.css";
import events from "./assets/fake_DB";
import SearchMovies from "./components/movies";
import ImageComponent from "./components/image";
import EventsContainer from "./components/eventsContainer";
import { Button, ButtonGroup } from "@material-ui/core";

import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";

import useStyles from "./styles";

export default function App() {
  let [filter, setFilter] = useState("");
  useEffect(() => {});
  const classes = useStyles();
  const buttonStyle = {
    fontSize: "0.5em",
    color: "#ffffff",
    backgroundColor: "#40407a"
  };
  return (
    <div className="App">
      <SearchMovies />
      <div className="ContainerTitle">Pour vous</div>
      <div>
        <div className={classes.root}>
          <GridList className={classes.gridList} cols={4.15}>
            {events.map((tile) => (
              <GridListTile key={tile.id}>
                <img src={tile.src} alt={tile.title1} />
                <GridListTileBar
                  title={tile.title1}
                  subtitle={tile.title2}
                  classes={{
                    root: classes.titleBar,
                    title: classes.title,
                    subtitle: classes.subtitle
                  }}
                />
              </GridListTile>
            ))}
          </GridList>
        </div>
      </div>
      {/* <div className="imagesContainer">
        {events.slice(0, 5).map((event) => (
          <ImageComponent key={event.id} event={event} />
        ))}
      </div>*/}

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
}
