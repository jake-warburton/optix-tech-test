import { TableBody } from "@mui/material";

import { Movie } from "../../../commonInterfaces";
import Row from "./row";

interface BodyProps {
  movies: Movie[];
  selectedMovieId?: number;
  setSelectedMovieId: (i: number) => void;
}

const Body: React.FC<BodyProps> = ({
  movies,
  selectedMovieId,
  setSelectedMovieId,
}) => (
  <TableBody>
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

export default Body;
