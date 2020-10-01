import React, { useState } from "react";

export default () => {
  const [query, setQuery] = useState("");
  const searchMovies = async (e) => {
    e.preventDefault();
    console.log("THIS WORKS");
    const query = "Jurassic Park";

    const url = `https://api.themoviedb.org/3/search/movie?api_key=8d16b00d800271d1d037c35d5d3df0e6&language=en-US&query=${query}&page=1&include_adult=false`;

    const res = await fetch(url);
    const data = await res.json();
    console.log(data.results[0]);
  };
  return (
    <form className="form" onSubmit={searchMovies}>
      <label className="label" htmlFor="query">
        label
      </label>
      <input
        className="input"
        type="text"
        name="query"
        placeholder="ex: histoire de l'art"
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
          console.log(query);
        }}
      />
      <button className="button" type="submit">
        Recherche
      </button>
    </form>
  );
};
