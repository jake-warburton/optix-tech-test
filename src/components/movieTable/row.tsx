import { TableCell, TableRow } from "@mui/material";

import { Movie } from "src/commonInterfaces";

interface RowProps {
  movie: Movie;
}

const Row: React.FC<RowProps> = ({ movie }) => {
  const averageScore = (
    movie.reviews.reduce((accumulator, current) => accumulator + current, 0) /
    movie.reviews.length
  ).toFixed(1);

  return (
    <TableRow key={`movie-row-${movie.id}`}>
      <TableCell>{movie.title}</TableCell>
      <TableCell>{movie.filmCompanyName}</TableCell>
      <TableCell>{averageScore}</TableCell>
    </TableRow>
  );
};

export default Row;
