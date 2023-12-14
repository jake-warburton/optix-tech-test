import { SORT_DIRECTIONS } from "../constants";

export const sortByKey = <T>(
  data: T[],
  sortKey: keyof T,
  sortDirection: SORT_DIRECTIONS
) => {
  const sortedData: T[] = [...data];

  return sortedData.sort((a, b) => {
    if (sortDirection === SORT_DIRECTIONS.Descending)
      return a[sortKey] > b[sortKey] ? -1 : 1;
    return a[sortKey] < b[sortKey] ? -1 : 1;
  });
};
