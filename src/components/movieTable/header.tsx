import { TableHead, TableCell, TableSortLabel, TableRow } from "@mui/material";

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

const Header = () => (
  <TableHead>
    <TableRow>
      {headings.map((heading) => (
        <TableCell>
          <TableSortLabel style={{ fontWeight: "600" }}>
            {heading.name}
          </TableSortLabel>
        </TableCell>
      ))}
    </TableRow>
  </TableHead>
);

export default Header;
