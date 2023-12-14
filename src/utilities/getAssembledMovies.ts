import { getMovieCompanies, getMovies } from "../api/movies";
import { getAverageMovieScore } from "./getAverageMovieScore";

export const getAssembledMovies = async () => {
  const {
    movies,
    success: getMoviesSuccess,
    error: getMoviesError,
  } = await getMovies();

  if (!getMoviesSuccess) {
    console.error(getMoviesError);
    return;
  }

  const {
    movieCompanies,
    success: getMovieCompaniesSuccess,
    error: getMovieCompaniesError,
  } = await getMovieCompanies();

  if (!getMovieCompaniesSuccess) {
    console.error(getMovieCompaniesError);
  }

  return movies.map((movie) => {
    const filmCompanyName =
      movieCompanies.find((company) => company.id === movie.filmCompanyId)
        ?.name ?? "-";

    const averageScore = getAverageMovieScore(movie.reviews);

    return { ...movie, averageScore, filmCompanyName };
  });
};
