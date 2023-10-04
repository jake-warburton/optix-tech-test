import { useState, useMemo } from "react";
import { easeIn, easeOut } from "polished";
import { Container, Chip } from "@mui/material";

import { getMovieCompanies, getMovies, postMovieReview } from "./api/movies";
import { Movie } from "./commonInterfaces";
import Button from "./components/button";
import Table from "./components/movieTable/table";

export const App = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loadingState, setLoadingState] = useState("");

  const populateMovies = async () => {
    setLoadingState("loading");
    setMovies([]);

    const { movies, success } = await getMovies();
    const { movieCompanies } = await getMovieCompanies();

    const joinedMovies = movies.map((movie) => {
      const matchingCompany = movieCompanies.find(
        (company) => company.id === movie.filmCompanyId
      );
      const filmCompanyName = matchingCompany ? matchingCompany.name : "-";

      return { ...movie, filmCompanyName };
    });

    setMovies(joinedMovies);
    setLoadingState(success ? "success" : "failure");
  };

  useMemo(() => {
    if (loadingState === "" && movies.length < 1) populateMovies();
  }, [loadingState, movies]);

  return (
    <div>
      <Container maxWidth="lg">
        <h2>Welcome to Movie database!</h2>

        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Chip
            data-testid="movie-counter"
            label={`${
              loadingState === "loading" ? "Loading" : movies.length
            } Movies`}
            variant="outlined"
          />

          <Button variant="contained" onClick={() => populateMovies()}>
            Refresh
          </Button>
        </div>
        <Table movies={movies} loadingState={loadingState} />
      </Container>

      {/*
      <div>
        {selectedMovie
          ? (selectedMovie.title as any)
            ? (("You have selected " + selectedMovie.title) as any)
            : "No Movie Title"
          : "No Movie Seelcted"}
        {selectedMovie && <p>Please leave a review below</p>}
        {selectedMovie && (
          <form onSubmit={() => {}}>
            <label>
              Review:
              <input type="text" />
            </label>
          </form>
        )}
      </div>
        */}
    </div>
  );
};
