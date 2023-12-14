//  I wanted to put this in a .env file but I am having this issue when running tests
//  TS1343: The 'import.meta' meta-property is only allowed when the '--module' option is 'es2020', 'es2022', 'esnext', 'system', 'node16', or 'nodenext'.
export const MOVIE_DATABASE_URL = "https://giddy-beret-cod.cyclic.app/";

export enum LOADING_STATE {
  Loading = "loading",
  Success = "success",
  Failure = "failure",
  Initial = "initial",
}

export enum SORT_DIRECTIONS {
  Ascending = "asc",
  Descending = "desc",
}

export enum FETCH_MOVIES_FEEDBACK {
  Empty = "No movies found.",
  Failure = "Sorry! We are having trouble contacting the movie database.",
}

export enum MOVIE_FEEDBACK_REVIEW {
  TooLong = "A review may only be up to 100 characters in length.",
  Placeholder = "Enter your review...",
}
