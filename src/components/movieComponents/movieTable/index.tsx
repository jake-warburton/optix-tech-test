import React, { useState, useMemo } from "react";
import {
  Card,
  CardContent,
  TableContainer as MUITableContainer,
  Table as MUITable,
} from "@mui/material";

import Header from "./header";
import Body from "./body";

import { sortDirections } from "../../../constants";
import { Movie } from "../../../commonInterfaces";

const sortMovies = (
  movies: any,
  sortKey?: string,
  direction?: sortDirections
) => {
  if (!movies) return;
  if (!sortKey || !direction) return movies;

  const sortedMovies: any = [...movies];

  return direction === sortDirections.Descending
    ? sortedMovies.sort((a: any, b: any) => a[sortKey] > b[sortKey])
    : sortedMovies.sort((a: any, b: any) => a[sortKey] < b[sortKey]);
};

interface TableProps {
  movies: Movie[];
  selectedMovieId?: number;
  setSelectedMovieId: (i: number) => void;
}

const Table: React.FC<TableProps> = ({
  movies,
  selectedMovieId,
  setSelectedMovieId,
}) => {
  const [sortKey, setSortKey] = useState<string | undefined>(undefined);
  const [sortDirection, setSortDirection] = useState<
    sortDirections | undefined
  >(undefined);

  const sortedMovies = useMemo(() => {
    return sortMovies(movies, sortKey, sortDirection);
  }, [movies, sortKey, sortDirection]);

  return (
    <Card style={{ width: "100%" }}>
      <CardContent>
        <MUITableContainer>
          <MUITable data-testid="movie-table">
            <Header
              sortKey={sortKey}
              setSortKey={setSortKey}
              sortDirection={sortDirection}
              setSortDirection={setSortDirection}
            />
            <Body
              movies={sortedMovies}
              selectedMovieId={selectedMovieId}
              setSelectedMovieId={setSelectedMovieId}
            />
          </MUITable>
        </MUITableContainer>
      </CardContent>
    </Card>
  );
};

export default Table;
