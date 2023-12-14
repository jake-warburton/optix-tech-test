import { Chip } from "@mui/material";
import { LOADING_STATE } from "src/constants";

interface CounterProps {
  count: number;
  title: string;
  loadingState: LOADING_STATE;
}

const Counter: React.FC<CounterProps> = ({ count, title, loadingState }) => (
  <Chip
    data-testid={`${title}-counter`}
    label={`${loadingState === "loading" ? "Loading" : count} ${title}`}
    variant="outlined"
  />
);

export default Counter;
