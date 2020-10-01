import React from "react";
import "./styles.css";
import events from "./assets/fake_DB";

import SearchMovies from "./components/movies";
import ImageComponent from "./components/image";

export default function App() {
  return (
    <div className="App">
      <SearchMovies />
      <div className="imagesContainer">
        {events.map((event) => (
          <ImageComponent key={event.id} event={event} />
        ))}
      </div>
      <h1>OK </h1>
    </div>
  );
}
