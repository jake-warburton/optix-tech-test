import { TableHead, TableCell, TableSortLabel, TableRow } from "@mui/material";

import { sortDirections } from "../../../constants";
import { getNextSortDirection } from "../../../utilities/getNextSortDirection";

interface HeaderProps {
  headings: { id: string; displayName: string }[];
  sortKey?: string;
  setSortKey: (sortKey: string | undefined) => void;
  sortDirection?: sortDirections;
  setSortDirection: (sortDirection: sortDirections | undefined) => void;
}

const Header: React.FC<HeaderProps> = ({
  headings,
  sortKey,
  setSortKey,
  sortDirection,
  setSortDirection,
}) => {
  const handleClickHeading = (headingId: string) => {
    if (sortKey !== headingId) {
      setSortKey(headingId);
      setSortDirection(sortDirections.Descending);
    } else {
      if (sortDirection === sortDirections.Ascending) setSortKey(undefined);
      setSortDirection(getNextSortDirection(sortDirection));
    }
  };

  return (
    <TableHead>
      <TableRow>
        {headings.map((heading) => (
          <TableCell>
            <TableSortLabel
              active={sortKey === heading.id}
              direction={sortDirection}
              onClick={() => handleClickHeading(heading.id)}
              style={{ fontWeight: "600" }}
            >
              {heading.displayName}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
};

export default Header;
