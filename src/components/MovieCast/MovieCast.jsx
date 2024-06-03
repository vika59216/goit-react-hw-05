import { useDetailsSearch } from "../../hooks/useDetailsSearch";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import Loader from "../Loader/Loader";
import css from "./MovieCast.module.css";

const MovieCast = () => {
  const { loading, error, imageUrl, movieCast, defaultImg } =
    useDetailsSearch();

  return (
    <>
      {loading && <Loader />}
      {error && <ErrorMessage />}
      <ul className={css.castList}>
        {Array.isArray(movieCast) &&
          movieCast.map((cast) => (
            <li key={cast.id} className={css.castItem}>
              <img
                src={
                  cast.profile_path
                    ? `${imageUrl}${cast.profile_path}`
                    : defaultImg
                }
                alt={cast.name}
              />
              <p>{cast.name}</p>
              <p>{`Character: ${cast.character}`}</p>
            </li>
          ))}
      </ul>
    </>
  );
};

export default MovieCast;