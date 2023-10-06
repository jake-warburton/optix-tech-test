import { TableCell, TableRow } from "@mui/material";

interface RowProps {
  key: string;
  cells: any[];
  selected: boolean;
  onClick: () => void;
}

const Row: React.FC<RowProps> = ({ key, cells, selected, onClick }) => {
  return (
    <TableRow
      key={key}
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
