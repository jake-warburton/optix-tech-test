import { TableHead, TableCell, TableSortLabel, TableRow } from "@mui/material";

const getNextSortDirection = (currentDirection) => {
  if (currentDirection === "asc") return "desc";
  if (currentDirection === "desc") return "";
  return "asc";
};

const headings = [
  {
    id: "title",
    name: "Movie",
  },
  {
    id: "filmCompanyName",
    name: "Company",
  },
  {
    id: "reviews",
    name: "Avg. Rating",
  },
];

interface HeaderProps {
  sortKey?: string;
  setSortKey: () => void;
  sortDirection?: string;
  setSortDirection: () => void;
}

const Header: React.FC<HeaderProps> = ({
  sortKey,
  setSortKey,
  sortDirection,
  setSortDirection,
}) => (
  <TableHead>
    <TableRow>
      {headings.map((heading) => (
        <TableCell>
          <TableSortLabel
            style={{ fontWeight: "600" }}
            active={sortKey === heading.id}
            direction={sortDirection}
            onClick={() => {
              setSortKey(
                sortKey === heading.id && sortDirection === "desc"
                  ? ""
                  : heading.id
              );
              setSortDirection(
                sortKey === heading.id
                  ? getNextSortDirection(sortDirection)
                  : "asc"
              );
            }}
          >
            {heading.name} TODO FIX SORTING
          </TableSortLabel>
        </TableCell>
      ))}
    </TableRow>
  </TableHead>
);

export default Header;
