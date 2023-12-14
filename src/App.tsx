import { useState, useEffect } from "react";

import { getAssembledMovies } from "./utilities/getAssembledMovies";
import { LOADING_STATE } from "./constants";
import { Movie } from "./commonInterfaces";
import Page from "./pages/index";

export const App = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loadingState, setLoadingState] = useState(LOADING_STATE.Initial);

  const populateMovies = async () => {
    setLoadingState(LOADING_STATE.Loading);
    setMovies([]);

    const assembledMovieData = await getAssembledMovies();

    setMovies(assembledMovieData ? assembledMovieData : []);
    setLoadingState(
      assembledMovieData ? LOADING_STATE.Success : LOADING_STATE.Failure
    );
  };

  useEffect(() => {
    populateMovies();
  }, []);

  return (
    <Page
      loadingState={loadingState}
      movies={movies}
      refreshData={() => populateMovies()}
    />
  );
};
