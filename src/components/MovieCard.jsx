import React from "react";
import styles from "./MovieCard.module.css";

function MovieCard(props) {
  return (
    <div className={styles.movieCard}>
      <img className={styles.img} src={props.src} alt="movie" />
    </div>
  );
}

export default MovieCard;
