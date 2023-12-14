import { SORT_DIRECTIONS } from "../constants";

export const getNextSortDirection = (
  currentDirection: SORT_DIRECTIONS | undefined
) => {
  switch (currentDirection) {
    case SORT_DIRECTIONS.Descending:
      return SORT_DIRECTIONS.Ascending;

    case SORT_DIRECTIONS.Ascending:
      return undefined;

    default:
      return SORT_DIRECTIONS.Descending;
  }
};
