import { getMovieCompanies, getMovies } from "../api/movies";
import { getAverageMovieScore } from "./getAverageMovieScore";

export const getAssembledMovies = async () => {
  const { movies, success } = await getMovies();

  if (!success) return;

  const { movieCompanies } = await getMovieCompanies();

  return movies.map((movie) => {
    const filmCompanyName =
      movieCompanies.find((company) => company.id === movie.filmCompanyId)
        ?.name ?? "-";

    const averageScore = getAverageMovieScore(movie.reviews);

    return { ...movie, averageScore, filmCompanyName };
  });
};
