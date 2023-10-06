import React, { useState, useMemo } from "react";
import {
  TableContainer as MUITableContainer,
  Table as MUITable,
} from "@mui/material";

import Header from "./header";
import Body from "./body";

import { sortDirections } from "../../constants";
import { Movie } from "../../commonInterfaces";

const sortMovies = (movies: any, key?: string, direction?: sortDirections) => {
  if (!movies) return;
  if (!key || !direction) return movies;

  const sortedMovies: any = [...movies];

  return direction === sortDirections.Descending
    ? sortedMovies.sort((a: any, b: any) => a[key] > b[key])
    : sortedMovies.sort((a: any, b: any) => a[key] < b[key]);
};

interface TableProps {
  movies: Movie[];
  selectedRow?: number;
  setSelectedRow: (i: number) => void;
}

const Table: React.FC<TableProps> = ({
  movies,
  selectedRow,
  setSelectedRow,
}) => {
  const [sortKey, setSortKey] = useState<string | undefined>(undefined);
  const [sortDirection, setSortDirection] = useState<
    sortDirections | undefined
  >(undefined);

  const sortedMovies = useMemo(() => {
    return sortMovies(movies, sortKey, sortDirection);
  }, [movies, sortKey, sortDirection]);

  return (
    <MUITableContainer
      style={{
        backgroundColor: "white",
        boxShadow: "0px 0px 15px #eee",
        border: "1px #000 solid",
        borderRadius: "8px",
      }}
    >
      <MUITable data-testid="movie-table">
        <Header
          sortKey={sortKey}
          setSortKey={setSortKey}
          sortDirection={sortDirection}
          setSortDirection={setSortDirection}
        />
        <Body
          movies={sortedMovies}
          selectedRow={selectedRow}
          setSelectedRow={setSelectedRow}
        />
      </MUITable>
    </MUITableContainer>
  );
};

export default Table;
