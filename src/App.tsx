import { useState, useMemo } from "react";

import { getMovieCompanies, getMovies } from "./api/movies";
import { LoadingState } from "./constants";
import { Movie } from "./commonInterfaces";
import Page from "./page";

export const App = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loadingState, setLoadingState] = useState(LoadingState.Initial);

  const populateMovies = async () => {
    setLoadingState(LoadingState.Loading);
    setMovies([]);

    const { movies, success } = await getMovies();
    const { movieCompanies } = await getMovieCompanies();

    const joinedMovies = movies.map((movie) => {
      const filmCompanyName =
        movieCompanies.find((company) => company.id === movie.filmCompanyId)
          ?.name ?? "-";

      const averageScore = (
        movie.reviews.reduce(
          (accumulator, current) => accumulator + current,
          0
        ) / movie.reviews.length
      ).toFixed(1);

      return { ...movie, averageScore, filmCompanyName };
    });

    setMovies(joinedMovies);
    setLoadingState(success ? LoadingState.Success : LoadingState.Failure);
  };

  useMemo(() => {
    if (loadingState === LoadingState.Initial) populateMovies();
  }, [loadingState, movies]);

  return (
    <Page
      loadingState={loadingState}
      movies={movies}
      refreshData={() => populateMovies()}
    />
  );
};
