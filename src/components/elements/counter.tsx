import { Chip } from "@mui/material";
import { LoadingState } from "src/constants";

interface CounterProps {
  count: number;
  title: string;
  loadingState: LoadingState;
}

const Counter: React.FC<CounterProps> = ({ count, title, loadingState }) => (
  <Chip
    data-testid={`${title}-counter`}
    label={`${loadingState === "loading" ? "Loading" : count} ${title}`}
    variant="outlined"
  />
);

export default Counter;
