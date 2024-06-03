import React from "react";
import { Link, useLocation } from "react-router-dom";
import css from "./MovieList.module.css";

const MovieList = ({ movies }) => {
  const location = useLocation();
  const locationForP = useLocation();
  return (
    <ul>
      {locationForP.pathname === "/" && <h2>Trending today</h2>}
      {Array.isArray(movies) &&
        movies.map((movie) => {
          return (
            <li key={movie.id}>
              <Link state={location} to={`/movies/${movie.id}`}>
                {movie.title}
              </Link>
            </li>
          );
        })}
    </ul>
  );
};

export default MovieList;