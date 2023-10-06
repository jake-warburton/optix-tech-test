import Header from "../elements/table/header";
import { sortDirections } from "../../constants";

const headings = [
  {
    id: "title",
    displayName: "Movie",
  },
  {
    id: "filmCompanyName",
    displayName: "Company",
  },
  {
    id: "averageScore",
    displayName: "Avg. Rating",
  },
];

interface MovieTableHeaderProps {
  sortKey?: string;
  setSortKey: (sortKey: string | undefined) => void;
  sortDirection?: sortDirections | undefined;
  setSortDirection: (sortDirection: sortDirections | undefined) => void;
}

const MovieTableHeader: React.FC<MovieTableHeaderProps> = ({
  sortKey,
  setSortKey,
  sortDirection,
  setSortDirection,
}) => {
  return (
    <Header
      headings={headings}
      sortKey={sortKey}
      setSortKey={setSortKey}
      sortDirection={sortDirection}
      setSortDirection={setSortDirection}
    />
  );
};

export default MovieTableHeader;
