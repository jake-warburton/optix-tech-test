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
    <div key={`movie-row-${movie.id}`}>
      <p>{movie.title}</p>
      <p>{averageScore}</p>
    </div>
  );
};

export default Row;
