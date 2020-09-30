import React from "react";

export default () => {
  return (
    <form className="form">
      <label className="label" htmlFor="query">
        Movie Name
      </label>
      <input
        className="input"
        type="text"
        name="query"
        placeholder="i.e. test Park"
      />
      <button className="button" type="submit">
        Search
      </button>
    </form>
  );
};
