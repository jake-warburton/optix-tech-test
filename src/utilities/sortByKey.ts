import { sortDirections } from "../constants";

export const sortByKey = (
  data: any,
  sortKey?: string,
  direction?: sortDirections
) => {
  if (!data) return;
  if (!sortKey || !direction) return data;

  const sortedData: any = [...data];

  return direction === sortDirections.Descending
    ? sortedData.sort((a: any, b: any) => a[sortKey] > b[sortKey])
    : sortedData.sort((a: any, b: any) => a[sortKey] < b[sortKey]);
};
