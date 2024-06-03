import MovieList from "../components/MovieList/MovieList";
import Loader from "../components/Loader/Loader";
import ErrorMessage from "../components/ErrorMessage/ErrorMessage";
import { useMovieSearch } from "../hooks/useMovieSearch";

const HomePage = () => {
  const { movies, loading, error } = useMovieSearch({
    isMoviesPage: false,
  });

  return (
    <div>
      {/* <h2>Trending today</h2> */}
      {loading && <Loader />}
      {error && <ErrorMessage message={error} />}
      {movies !== null && <MovieList movies={movies} />}
    </div>
  );
};

export default HomePage;