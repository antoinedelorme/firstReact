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
          <Button
            onClick={() => setFilter("")}
            style={{
              fontSize: "0.5em",
              color: "#FFFFFF",
              backgroundColor: "#000000"
            }}
          >
            Tout
          </Button>
          <Button
            onClick={() => setFilter("histoire")}
            style={{
              fontSize: "0.5em",
              color: "#000",
              backgroundColor: "#2ed573"
            }}
          >
            Histoire
          </Button>
          <Button
            onClick={() => setFilter("musique")}
            style={{
              fontSize: "0.5em",
              color: "#fff",
              backgroundColor: "#eccc68"
            }}
          >
            Musique
          </Button>
          <Button
            onClick={() => setFilter("art")}
            style={{
              fontSize: "0.5em",
              color: "#f1f2f6",
              backgroundColor: "#6D214F"
            }}
          >
            Art
          </Button>
          <Button
            onClick={() => setFilter("sciences")}
            style={{
              fontSize: "0.5em",
              color: "#ffffff",
              backgroundColor: "#40407a"
            }}
          >
            Sciences
          </Button>
          <Button
            onClick={() => setFilter("voyages")}
            style={{
              fontSize: "0.5em",
              color: "#ffffff",
              backgroundColor: "#ff5252"
            }}
          >
            Voyages
          </Button>
        </ButtonGroup>
      </div>
      <EventsContainer events={events} filter={filter} />
    </div>
  );
}
