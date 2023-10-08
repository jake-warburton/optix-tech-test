import { sortDirections } from "../constants";

export const sortByKey = (
  data: any[],
  sortKey?: string,
  sortDirection?: sortDirections
) => {
  if (!sortKey || !sortDirection) return data;

  const sortedData: any[] = [...data];

  return sortDirection === sortDirections.Descending
    ? sortedData.sort((a: any, b: any) => (a[sortKey] > b[sortKey] ? -1 : 1))
    : sortedData.sort((a: any, b: any) => (a[sortKey] < b[sortKey] ? -1 : 1));
};
