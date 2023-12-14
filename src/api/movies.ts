import axios, { isAxiosError } from "axios";

import { Movie, MovieCompany } from "../commonInterfaces";
import { MOVIE_DATABASE_URL } from "../constants";

interface GetMoviesResponse {
  movies: Movie[];
  success: boolean;
  error?: string;
}

export const getMovies = async (): Promise<GetMoviesResponse> => {
  try {
    const response = await axios.get(`${MOVIE_DATABASE_URL}movies`);

    return {
      movies:
        response.status === 200 && response.data.length > 0
          ? response.data
          : [],
      success: true,
    };
  } catch (err) {
    if (isAxiosError(err)) {
      return {
        movies: [],
        success: false,
        error: err.message,
      };
    }

    console.error(err);

    return {
      movies: [],
      success: false,
      error: "Failed to fetch movies from the API",
    };
  }
};

interface GetMovieCompaniesResponse {
  movieCompanies: MovieCompany[];
  success: boolean;
  error?: string;
}

export const getMovieCompanies =
  async (): Promise<GetMovieCompaniesResponse> => {
    try {
      const response = await axios.get(`${MOVIE_DATABASE_URL}movieCompanies`);

      return {
        movieCompanies:
          response.status === 200 && response.data.length > 0
            ? response.data
            : [],
        success: true,
      };
    } catch (err) {
      if (isAxiosError(err)) {
        return {
          movieCompanies: [],
          success: false,
          error: err.message,
        };
      }

      console.error(err);

      return {
        movieCompanies: [],
        success: false,
        error: "Failed to fetch movie companies from the API",
      };
    }
  };

interface PostMovieReviewResponse {
  message: string;
  success: boolean;
}

export const postMovieReview = async (
  message: string
): Promise<PostMovieReviewResponse> => {
  try {
    const response = await axios.post(`${MOVIE_DATABASE_URL}submitReview`, {
      review: message,
    });

    return {
      message:
        response.status === 200
          ? response.data.message
          : "Failed to submit your movie review. Please try again later.",
      success: response.status === 200 ? true : false,
    };
  } catch (err) {
    if (isAxiosError(err)) {
      return {
        message: err.message,
        success: false,
      };
    }

    console.error(err);

    return {
      message: "Failed to submit your movie review. Please try again later.",
      success: false,
    };
  }
};
