import React, { useEffect, useState } from "react";
import {
 
  fetchMovieReviewsById,
} from "../services/api";
import { useParams } from "react-router-dom";

export const useMovieReviews = () => {
  const imageUrl = "https://image.tmdb.org/t/p/w500";
  const defaultImg =
    "https://dl-media.viber.com/10/share/2/long/vibes/icon/image/0x0/95e0/5688fdffb84ff8bed4240bcf3ec5ac81ce591d9fa9558a3a968c630eaba195e0.jpg";
  const { movieId } = useParams();
 
  const [movieReviews, setMovieReviews] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

    
     useEffect(() => {
    async function fetchMovieReviews() {
      if (!movieId) return;
      setLoading(true);
      try {
        const movieReviews = await fetchMovieReviewsById(movieId);
        setMovieReviews(movieReviews);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }

    fetchMovieReviews();
     }, [movieId]);
     return {
    
    movieReviews,
    loading,
    error,
    imageUrl,
    defaultImg,
  };
};