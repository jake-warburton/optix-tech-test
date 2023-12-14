import Header from "../../elements/table/header";
import { SORT_DIRECTIONS } from "../../../constants";
import { Movie } from "../../../commonInterfaces";

const headings = [
  {
    id: "title" as keyof Movie,
    displayName: "Movie",
  },
  {
    id: "filmCompanyName" as keyof Movie,
    displayName: "Company",
  },
  {
    id: "averageScore" as keyof Movie,
    displayName: "Avg. Rating",
  },
];

interface MovieTableHeaderProps {
  sortKey?: keyof Movie;
  setSortKey: (sortKey: keyof Movie | undefined) => void;
  sortDirection?: SORT_DIRECTIONS | undefined;
  setSortDirection: (sortDirection: SORT_DIRECTIONS | undefined) => void;
}

const MovieTableHeader: React.FC<MovieTableHeaderProps> = ({
  sortKey,
  setSortKey,
  sortDirection,
  setSortDirection,
}) => {
  return (
    <Header<Movie>
      headings={headings}
      sortKey={sortKey}
      setSortKey={setSortKey}
      sortDirection={sortDirection}
      setSortDirection={setSortDirection}
    />
  );
};

export default MovieTableHeader;
