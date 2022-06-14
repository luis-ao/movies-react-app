import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { get } from "../utils/httpClients";
import { Spinner } from "../components/Spinner";
import styles from "./MovieDetails.module.css";

export function MoviesDetails() {
  const { movieId } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    get("/movie/" + movieId).then((data) => {
      setMovie(data);
      setIsLoading(false);
    });
  }, [movieId]);

  if (isLoading) {
    return <Spinner />;
  }

  const imageUrl = "https://image.tmdb.org/t/p/w500" + movie.poster_path;

  return (
    <div className={styles.detailsContainer}>
      <img
        className={`${styles.col} ${styles.movieImage}`}
        src={imageUrl}
        alt={movie.title}
      />
      <div className={`${styles.col} ${styles.movieDetails}`}>
        <p className={styles.firstItem}>
          <span className={styles.title}>Title:</span> {movie.title}
        </p>
        <p>
          <span className={styles.title}>Genres: </span>
          {movie.genres.map((genre) => genre.name).join(", ")}
        </p>
        <p>
          <span className={styles.title}>Description:</span> {movie.overview}
        </p>
      </div>
    </div>
  );
}
