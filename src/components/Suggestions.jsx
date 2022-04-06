import React from "react";
import styles from "./Suggestions.module.css";
import MovieCard from "./MovieCard";
import MovieA from "../assests/moviea.webp";
import MovieB from "../assests/movieb.webp";
import MovieC from "../assests/moviec.webp";
import MovieD from "../assests/movied.jpg";
import MovieE from "../assests/moviee.webp";
import MovieF from "../assests/movief.webp";

function Suggestions() {
  return (
    <div className={styles.main}>
      <div>
        <b>Trending</b>
      </div>
      <div className={styles.movies}>
        <MovieCard src={MovieA} />
        <MovieCard src={MovieB} />
        <MovieCard src={MovieC} />
        <MovieCard src={MovieD} />
        <MovieCard src={MovieE} />
        <MovieCard src={MovieF} />
      </div>
    </div>
  );
}

export default Suggestions;
