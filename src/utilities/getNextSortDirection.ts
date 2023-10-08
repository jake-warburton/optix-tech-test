import { sortDirections } from "../constants";

export const getNextSortDirection = (
  currentDirection: sortDirections | undefined
) => {
  switch (currentDirection) {
    case sortDirections.Descending:
      return sortDirections.Ascending;

    case sortDirections.Ascending:
      return undefined;

    default:
      return sortDirections.Descending;
  }
};
