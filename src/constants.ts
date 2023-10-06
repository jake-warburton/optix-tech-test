export const MOVIE_DATABASE_URL =
  "https://comforting-starlight-f3456a.netlify.app/.netlify/functions/";

export enum LoadingState {
  Loading = "loading",
  Success = "success",
  Failure = "failure",
  Initial = "initial",
}

export enum sortDirections {
  Ascending = "asc",
  Descending = "desc",
}

export enum FetchMoviesFeedback {
  Empty = "No movies found.",
  Failure = "Sorry! We are having trouble contacting the movie database.",
}
