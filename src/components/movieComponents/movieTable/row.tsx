import Row from "../../elements/table/row";
import { Movie } from "../../../commonInterfaces";

interface MovieTableRow {
  movie: Movie;
  selected: boolean;
  darkenRow?: boolean;
  onClick: () => void;
}

const MovieTableRow: React.FC<MovieTableRow> = ({
  movie,
  selected,
  darkenRow,
  onClick,
}) => {
  const cells = [movie.title, movie.filmCompanyName, movie.averageScore];

  return (
    <Row
      id={`movie-row-${movie.id}`}
      cells={cells}
      darkenRow={darkenRow}
      selected={selected}
      onClick={onClick}
    />
  );
};

export default MovieTableRow;
