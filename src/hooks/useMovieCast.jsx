import React, { useEffect, useState } from "react";
import {
  fetchMovieCastById,
 
} from "../services/api";
import { useParams } from "react-router-dom";

export const useMovieCast = () => {
  const imageUrl = "https://image.tmdb.org/t/p/w500";
  const defaultImg =
    "https://dl-media.viber.com/10/share/2/long/vibes/icon/image/0x0/95e0/5688fdffb84ff8bed4240bcf3ec5ac81ce591d9fa9558a3a968c630eaba195e0.jpg";
  const { movieId } = useParams();
  const [movieCast, setMovieCast] = useState(null);
 
  const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    



    useEffect(() => {
    if (!movieId) return;
    async function fetchMovieCast() {
      setLoading(true);
      try {
        const movieCast = await fetchMovieCastById(movieId);
        setMovieCast(movieCast);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }

    fetchMovieCast();
    }, [movieId]);
    



    return {
   
    movieCast,
    loading,
    error,
    imageUrl,
    defaultImg,
  };
};