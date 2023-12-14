import { CircularProgress, Box, Typography } from "@mui/material";

const getFillColour = (
  percentageFilled: number
): "error" | "warning" | "success" | "primary" => {
  if (percentageFilled > 100) return "error";
  if (percentageFilled > 90) return "warning";
  if (percentageFilled > 1) return "success";
  return "primary";
};

interface CircularProgressWithLabelProps {
  percentageFilled: number;
  label: string;
}

const CircularProgressWithLabel: React.FC<CircularProgressWithLabelProps> = ({
  percentageFilled,
  label,
}) => {
  return (
    <Box sx={{ position: "relative", display: "inline-flex" }}>
      <CircularProgress
        variant="determinate"
        value={Math.min(percentageFilled, 100)}
        color={getFillColour(percentageFilled)}
      />
      <Box
        top="0"
        left="0"
        bottom="0"
        right="0"
        position="absolute"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Typography fontSize={14}>{label}</Typography>
      </Box>
    </Box>
  );
};

export default CircularProgressWithLabel;
