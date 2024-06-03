import { useDetailsSearch } from "../../hooks/useDetailsSearch";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import Loader from "../Loader/Loader";

const MovieReviews = () => {
  const { loading, error, movieReviews } = useDetailsSearch();
  return (
    <>
      {loading && <Loader />}
      {error && <ErrorMessage />}

      <ul>
        {movieReviews !== null && movieReviews.length > 0 ? (
          movieReviews.map((review) => (
            <li key={review.id}>
              <p>{`Author: ${review.author}`}</p>
              <p>{review.content}</p>
            </li>
          ))
        ) : (
          <p>We don&apos;t have any reviews for this movie.</p>
        )}
      </ul>
    </>
  );
};

export default MovieReviews;