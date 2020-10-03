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
  const [state, setState] = useState({ filter: "", YPosition: 0 });
  useEffect(() => {
    // Met à jour le titre du document via l’API du navigateur
    document.title = `${state.YPosition}`;
    window.scrollTo(state.YPosition, 0);
  });
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
            onClick={(localEvent) => {
              setState((prevState) => {
                const newState = {
                  ...prevState,
                  filter: "",
                  YPosition: window.scrollY
                };
                return newState; //instead of newState we return the changed prevState
              });
            }}
            style={{
              fontSize: "0.5em",
              color: "#FFFFFF",
              backgroundColor: "#000000"
            }}
          >
            Tout
          </Button>
          <Button
            onClick={(localEvent) => {
              setState((prevState) => {
                const newState = {
                  ...prevState,
                  filter: "histoire",
                  YPosition: window.scrollY
                };
                return newState; //instead of newState we return the changed prevState
              });
            }}
            style={{
              fontSize: "0.5em",
              color: "#000",
              backgroundColor: "#2ed573"
            }}
          >
            Histoire
          </Button>
          <Button
            onClick={(localEvent) => {
              setState((prevState) => {
                const newState = {
                  ...prevState,
                  filter: "musique",
                  YPosition: window.scrollY
                };
                return newState; //instead of newState we return the changed prevState
              });
            }}
            style={{
              fontSize: "0.5em",
              color: "#fff",
              backgroundColor: "#eccc68"
            }}
          >
            Musique
          </Button>
          <Button
            onClick={(localEvent) => {
              setState((prevState) => {
                const newState = {
                  ...prevState,
                  filter: "art",
                  YPosition: window.scrollY
                };
                return newState; //instead of newState we return the changed prevState
              });
            }}
            style={{
              fontSize: "0.5em",
              color: "#f1f2f6",
              backgroundColor: "#6D214F"
            }}
          >
            Art
          </Button>
          <Button
            onClick={(localEvent) => {
              setState((prevState) => {
                const newState = {
                  ...prevState,
                  filter: "sciences",
                  YPosition: window.scrollY
                };
                return newState; //instead of newState we return the changed prevState
              });
            }}
            style={{
              fontSize: "0.5em",
              color: "#ffffff",
              backgroundColor: "#40407a"
            }}
          >
            Sciences
          </Button>
          <Button
            onClick={(localEvent) => {
              setState((prevState) => {
                const newState = {
                  ...prevState,
                  filter: "voyages",
                  YPosition: window.scrollY
                };
                return newState; //instead of newState we return the changed prevState
              });
            }}
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
      <EventsContainer events={events} filter={state.filter} />
    </div>
  );
}
