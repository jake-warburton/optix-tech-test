import React from "react";
import {
  TableContainer as MUITableContainer,
  Table as MUITable,
  TableBody as MUITableBody,
  TableHead as MUITableHead,
  TableCell as MUITableCell,
  TableSortLabel as MUITableSortLabel,
  CircularProgress,
  Alert,
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
  <div style={{ paddingTop: "3em" }}>
    {loadingState === LoadingState.Loading ? (
      <span data-testid="loading-icon">
        <CircularProgress />
      </span>
    ) : movies.length < 1 ? (
      <Alert
        data-testid="feedback-message"
        severity={loadingState === LoadingState.Failure ? "error" : "warning"}
      >
        {loadingState === LoadingState.Success && FETCH_MOVIES.EMPTY}
        {loadingState === LoadingState.Failure && FETCH_MOVIES.FAILURE}
      </Alert>
    ) : (
      <MUITableContainer>
        <MUITable data-testid="movie-table">
          <MUITableHead>
            <MUITableCell>
              <MUITableSortLabel>Movie</MUITableSortLabel>
            </MUITableCell>
            <MUITableCell>
              <MUITableSortLabel>Company</MUITableSortLabel>
            </MUITableCell>
            <MUITableCell>
              <MUITableSortLabel>Avg. Rating</MUITableSortLabel>
            </MUITableCell>
          </MUITableHead>
          <MUITableBody>
            {movies.map((movie) => (
              <Row movie={movie} />
            ))}
          </MUITableBody>
        </MUITable>
      </MUITableContainer>
    )}
  </div>
);

export default Table;
