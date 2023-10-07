//  I wanted to put this in a .env file but I am having this issue when running tests
//  TS1343: The 'import.meta' meta-property is only allowed when the '--module' option is 'es2020', 'es2022', 'esnext', 'system', 'node16', or 'nodenext'.
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

export enum MovieReviewFeedback {
  TooLong = "A review may only be up to 100 characters in length.",
  Placeholder = "Enter your review...",
}
