import React, { useState, useMemo } from "react";
import {
  Box,
  Card,
  CardContent,
  TableContainer as MUITableContainer,
  Table as MUITable,
} from "@mui/material";

import Header from "./movieTableHeader";
import Body from "./movieTableBody";

import { SORT_DIRECTIONS } from "../../../constants";
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
  const [sortKey, setSortKey] = useState<keyof Movie | undefined>(undefined);
  const [sortDirection, setSortDirection] = useState<
    SORT_DIRECTIONS | undefined
  >(undefined);

  const sortedMovies = useMemo(() => {
    if (sortKey && sortDirection)
      return sortByKey(movies, sortKey, sortDirection);
    return movies;
  }, [movies, sortKey, sortDirection]);

  return (
    <Box width="100%">
      <Card>
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
    </Box>
  );
};

export default MovieTable;
