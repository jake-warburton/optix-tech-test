import { TableBody } from "@mui/material";

import { Movie } from "../../commonInterfaces";
import Row from "./row";

interface BodyProps {
  movies: Movie[];
  selectedRow?: number;
  setSelectedRow: (i: number) => void;
}

const Body: React.FC<BodyProps> = ({ movies, selectedRow, setSelectedRow }) => (
  <TableBody>
    {movies.map((movie, i) => (
      <Row
        movie={movie}
        selected={selectedRow === i}
        onClick={() => setSelectedRow(i)}
      />
    ))}
  </TableBody>
);

export default Body;
