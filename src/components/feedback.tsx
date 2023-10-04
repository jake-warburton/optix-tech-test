import { Alert } from "@mui/material";

import { FetchMoviesFeedback, LoadingState } from "../constants";

interface FeedbackProps {
  loadingState: string;
}

const Feedback: React.FC<FeedbackProps> = ({ loadingState }) => (
  <Alert
    data-testid="feedback-message"
    severity={loadingState === LoadingState.Failure ? "error" : "warning"}
  >
    {loadingState === LoadingState.Success && FetchMoviesFeedback.Empty}
    {loadingState === LoadingState.Failure && FetchMoviesFeedback.Failure}
  </Alert>
);

export default Feedback;
