import React from "react";

import Row from "./row";

import { Movie } from "src/commonInterfaces";

interface TableProps {
  movies: Movie[];
}

const Table: React.FC<TableProps> = ({ movies }) => (
  <div>
    <span data-testid="movie-counter">{movies.length} Movies</span>
    <div data-testid="movie-table">
      {movies.map((movie) => (
        <Row movie={movie} />
      ))}
    </div>
  </div>
);

export default Table;
