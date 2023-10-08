import { TableBody } from "@mui/material";

import { Movie } from "../../../commonInterfaces";
import Row from "./movieTableRow";

interface MovieTableBodyProps {
  movies: Movie[];
  selectedMovieId?: number;
  setSelectedMovieId: (i: number) => void;
}

const MovieTableBody: React.FC<MovieTableBodyProps> = ({
  movies,
  selectedMovieId,
  setSelectedMovieId,
}) => (
  <TableBody data-testid="movie-table-body">
    {movies.map((movie, i) => (
      <Row
        movie={movie}
        selected={selectedMovieId === parseInt(movie.id)}
        darkenRow={i % 2 === 1}
        onClick={() => setSelectedMovieId(parseInt(movie.id))}
      />
    ))}
  </TableBody>
);

export default MovieTableBody;
