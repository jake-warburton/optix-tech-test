import Row from "../elements/table/row";
import { Movie } from "../../commonInterfaces";

interface MovieTableRow {
  movie: Movie;
  selected: boolean;
  onClick: () => void;
}

const MovieTableRow: React.FC<MovieTableRow> = ({
  movie,
  selected,
  onClick,
}) => {
  const cells = [movie.title, movie.filmCompanyName, movie.averageScore];

  return (
    <Row
      key={`movie-row-${movie.id}`}
      cells={cells}
      selected={selected}
      onClick={onClick}
    />
  );
};

export default MovieTableRow;
