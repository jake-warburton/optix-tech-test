import React, { useState, useMemo } from "react";
import {
  Card,
  CardContent,
  TableContainer as MUITableContainer,
  Table as MUITable,
} from "@mui/material";

import Header from "./movieTableHeader";
import Body from "./movieTableBody";

import { sortDirections } from "../../../constants";
import { Movie } from "../../../commonInterfaces";
import { sortByKey } from "../../../utilities/sortByKey";

interface MovieTableProps {
  movies: Movie[];
  selectedMovieId?: number;
  setSelectedMovieId: (i: number) => void;
}

const MovieTable: React.FC<MovieTableProps> = ({
  movies,
  selectedMovieId,
  setSelectedMovieId,
}) => {
  const [sortKey, setSortKey] = useState<string | undefined>(undefined);
  const [sortDirection, setSortDirection] = useState<
    sortDirections | undefined
  >(undefined);

  const sortedMovies = useMemo(
    () => sortByKey(movies, sortKey, sortDirection),
    [movies, sortKey, sortDirection]
  );

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

export default MovieTable;
