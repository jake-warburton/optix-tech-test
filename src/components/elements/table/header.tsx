import {
  TableHead,
  TableCell,
  TableSortLabel,
  TableRow,
  Typography,
} from "@mui/material";

import { SORT_DIRECTIONS } from "../../../constants";
import { getNextSortDirection } from "../../../utilities/getNextSortDirection";

interface HeaderProps<T> {
  headings: { id: keyof T; displayName: string }[];
  sortKey?: keyof T;
  setSortKey: (sortKey: keyof T | undefined) => void;
  sortDirection?: SORT_DIRECTIONS;
  setSortDirection: (sortDirection: SORT_DIRECTIONS | undefined) => void;
}

const Header = <T,>({
  headings,
  sortKey,
  setSortKey,
  sortDirection,
  setSortDirection,
}: HeaderProps<T>) => {
  const handleClickHeading = (headingId: keyof T) => {
    if (sortKey !== headingId) {
      setSortKey(headingId);
      setSortDirection(SORT_DIRECTIONS.Descending);
    } else {
      if (sortDirection === SORT_DIRECTIONS.Ascending) setSortKey(undefined);
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
            >
              <Typography fontWeight="600">{heading.displayName}</Typography>
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
};

export default Header;
