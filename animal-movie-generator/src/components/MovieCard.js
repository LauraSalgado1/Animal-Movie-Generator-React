import React from "react";

const MovieCard = ({ movie, animalString }) => {
  return (
    <>
      <a
        href={`https://www.google.com/search?q=${movie.title}`}
        target="_blank"
        rel="noreferrer"
      >
        {movie.poster_path ? (
          <>
            <img
              src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              alt={movie.title}
              width="500"
              height="750"
              loading="lazy"
            />
          </>
        ) : (
          <img
            src={`/${animalString}.svg`}
            alt={movie.title}
            width="500"
            height="750"
            loading="lazy"
          />
        )}

        <div className="writeup">
          <h3>{movie.title}</h3>
          <p>{movie.overview}</p>
        </div>
      </a>
    </>
  );
};

export default MovieCard;
