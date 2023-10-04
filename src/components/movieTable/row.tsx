import { TableCell, TableRow } from "@mui/material";

import { Movie } from "src/commonInterfaces";

interface RowProps {
  movie: Movie;
  selected: boolean;
  onClick: () => void;
}

const Row: React.FC<RowProps> = ({ movie, selected, onClick }) => {
  return (
    <TableRow
      key={`movie-row-${movie.id}`}
      selected={selected}
      onClick={onClick}
      style={{ cursor: "pointer" }}
    >
      <TableCell>{movie.title}</TableCell>
      <TableCell>{movie.filmCompanyName}</TableCell>
      <TableCell>{movie.averageScore}</TableCell>
    </TableRow>
  );
};

export default Row;
