import { useState, useMemo } from "react";

import { getAssembledMovies } from "./utilities/getAssembledMovies";
import { LoadingState } from "./constants";
import { Movie } from "./commonInterfaces";
import Page from "./pages/index";

export const App = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loadingState, setLoadingState] = useState(LoadingState.Initial);

  const populateMovies = async () => {
    setLoadingState(LoadingState.Loading);
    setMovies([]);

    const assembledMovieData = await getAssembledMovies();

    setMovies(assembledMovieData ? assembledMovieData : []);
    setLoadingState(
      assembledMovieData ? LoadingState.Success : LoadingState.Failure
    );
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
