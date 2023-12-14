import { TableCell, TableRow } from "@mui/material";
import React from "react";

interface RowProps {
  id: string;
  cells: React.ReactNode[];
  selected: boolean;
  darkenRow?: boolean;
  onClick: () => void;
}

const Row: React.FC<RowProps> = ({
  id,
  cells,
  selected,
  darkenRow,
  onClick,
}) => {
  return (
    <TableRow
      key={id}
      data-testid={id}
      selected={selected}
      onClick={onClick}
      sx={{
        cursor: "pointer",
        backgroundColor: !selected && darkenRow ? "#efefef" : "",
      }}
    >
      {cells.map((cell) => (
        <TableCell>{cell}</TableCell>
      ))}
    </TableRow>
  );
};

export default Row;
