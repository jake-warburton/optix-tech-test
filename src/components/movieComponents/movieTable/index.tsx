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
import { sortByKey } from "../../../utilities/sortByKey";

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
    return sortByKey(movies, sortKey, sortDirection);
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
