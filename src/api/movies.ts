import axios from "axios";

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
  } catch (err: any) {
    return {
      movies: [],
      error: err.message,
      success: false,
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
    } catch (err: any) {
      return {
        movieCompanies: [],
        error: err.message,
        success: false,
      };
    }
  };

interface PostMovieReviewRequest {
  message: string;
}

interface PostMovieReviewResponse {
  message: string;
  success: boolean;
}

export const postMovieReview = async (
  message: PostMovieReviewRequest
): Promise<PostMovieReviewResponse> => {
  try {
    const response = await axios.post(`${MOVIE_DATABASE_URL}submitReview`, {
      review: message,
    });

    return {
      message: response.status === 200 ? response.data : null,
      success: response.status === 200 ? true : false,
    };
  } catch (err: any) {
    return {
      message: err.message,
      success: false,
    };
  }
};
