import { useEffect, useState } from "react";
import MovieProps from "../MovieSinglePost";

export default function useMovies() {
  const [movies, setMovies] = useState<MovieProps[] | null>(null);
  const [isLoading, setIsLoading] = useState<Boolean>(false);
  const [error, setError] = useState<unknown>();

  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);
        const resp = await fetch("moviedata.json");
        const data = await resp.json();
        setMovies(data);
        setIsLoading(false);
      } catch (err) {
        setError(err);
        setIsLoading(false);
      }
    })();
  }, []);

  return {
    isLoading,
    movies,
    error
  };

}