import React, { useEffect, useState } from "react";
import {
  fetchMovieCastById,
  fetchMovieDetailsById,
  fetchMovieReviewsById,
} from "../services/api";
import { useParams } from "react-router-dom";

export const useDetailsSearch = () => {
  const imageUrl = "https://image.tmdb.org/t/p/w500";
  const defaultImg =
    "https://dl-media.viber.com/10/share/2/long/vibes/icon/image/0x0/95e0/5688fdffb84ff8bed4240bcf3ec5ac81ce591d9fa9558a3a968c630eaba195e0.jpg";
  const { movieId } = useParams();
  const [movieData, setMovieData] = useState(null);
  const [movieCast, setMovieCast] = useState(null);
  const [movieReviews, setMovieReviews] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!movieId) return;
    async function fetchMovieDetails() {
      setLoading(true);
      try {
        const movieData = await fetchMovieDetailsById(movieId);
        setMovieData(movieData);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }

    fetchMovieDetails();
  }, [movieId]);

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
    movieData,
    movieCast,
    movieReviews,
    loading,
    error,
    imageUrl,
    defaultImg,
  };
};