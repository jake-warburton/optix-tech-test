import React from "react";
import {
  TableContainer as MUITableContainer,
  Table as MUITable,
} from "@mui/material";

import Header from "./header";
import Body from "./body";

import { Movie } from "../../commonInterfaces";

interface TableProps {
  movies: Movie[];
  selectedRow?: number;
  setSelectedRow: (i: number) => void;
}

const Table: React.FC<TableProps> = ({
  movies,
  selectedRow,
  setSelectedRow,
}) => (
  <MUITableContainer
    style={{
      backgroundColor: "white",
      boxShadow: "0px 0px 15px #eee",
      border: "1px #000 solid",
      borderRadius: "8px",
    }}
  >
    <MUITable data-testid="movie-table">
      <Header />
      <Body
        movies={movies}
        selectedRow={selectedRow}
        setSelectedRow={setSelectedRow}
      />
    </MUITable>
  </MUITableContainer>
);

export default Table;
