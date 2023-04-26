import React from "react";

const MoviesSection = ({ currentAnimalUrl, moviesList }) => {
  return (
    <>
      <div
        className="content-area"
        id="contentArea"
        style={{
          backgroundImage: currentAnimalUrl,
        }}
      >
        <ul id="container" className="movies-list">
          {moviesList}
        </ul>
      </div>
    </>
  );
};

export default MoviesSection;
