import { TableCell, TableRow } from "@mui/material";

interface RowProps {
  id: string;
  cells: any[];
  selected: boolean;
  onClick: () => void;
}

const Row: React.FC<RowProps> = ({ id, cells, selected, onClick }) => {
  return (
    <TableRow
      key={id}
      data-testid={id}
      selected={selected}
      onClick={onClick}
      style={{ cursor: "pointer" }}
    >
      {cells.map((cell) => (
        <TableCell>{cell}</TableCell>
      ))}
    </TableRow>
  );
};

export default Row;
