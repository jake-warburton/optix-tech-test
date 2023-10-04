import React from "react";
import {
  TableContainer as MUITableContainer,
  Table as MUITable,
  TableBody as MUITableBody,
  TableHead as MUITableHead,
  TableCell as MUITableCell,
} from "@mui/material";

import Row from "./row";

import { Movie } from "../../commonInterfaces";
import { FETCH_MOVIES } from "../../constants";

enum LoadingState {
  Loading = "loading",
  Success = "success",
  Failure = "failure",
}
interface TableProps {
  movies: Movie[];
  loadingState: string;
}

const Table: React.FC<TableProps> = ({ movies, loadingState }) => (
  <>
    <span data-testid="movie-counter">{movies.length} Movies</span>

    {loadingState === LoadingState.Loading ? (
      <span data-testid="loading-icon">Loading icon TODO</span>
    ) : movies.length < 1 ? (
      <p data-testid="feedback-message">
        {loadingState === LoadingState.Success && FETCH_MOVIES.EMPTY}
        {loadingState === LoadingState.Failure && FETCH_MOVIES.FAILURE}
      </p>
    ) : (
      <MUITableContainer>
        <MUITable data-testid="movie-table">
          <MUITableHead>
            <MUITableCell>Movie</MUITableCell>
            <MUITableCell>Avg. Rating</MUITableCell>
          </MUITableHead>
          <MUITableBody>
            {movies.map((movie) => (
              <Row movie={movie} />
            ))}
          </MUITableBody>
        </MUITable>
      </MUITableContainer>
    )}
  </>
);

export default Table;
