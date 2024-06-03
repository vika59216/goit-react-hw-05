import React, { useEffect, useState } from "react";
import { fetchTrendingMovies, searchMoviesByName } from "../services/api";
import { useSearchParams } from "react-router-dom";

export const useMovieSearch = ({ isMoviesPage = false }) => {
  const [movies, setMovies] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("query");

  useEffect(() => {
    if (isMoviesPage) return;
    async function feachData() {
      setLoading(true);
      try {
        setError(false);
        const data = await fetchTrendingMovies();
        setMovies(data);
      } catch (error) {
        setError("Failed to fetch movies. Please try again later.");
      } finally {
        setLoading(false);
      }
    }
    feachData();
  }, []);

  useEffect(() => {
    if (!query) return;
    async function fetchMovies() {
      setLoading(true);
      try {
        const data = await searchMoviesByName(query);
        setMovies(data);
      } catch (error) {
        setError("Failed to fetch movies. Please try again later.");
      } finally {
        setLoading(false);
      }
    }
    fetchMovies();
  }, [query]);

  const onSetSearchQuery = (searchTerm) => {
    // setQuery(searchTerm);
    setSearchParams({ query: searchTerm });
  };
  return { movies, loading, error, onSetSearchQuery };
};