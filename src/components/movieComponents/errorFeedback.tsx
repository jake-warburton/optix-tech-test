import { Alert } from "@mui/material";

import { FetchMoviesFeedback, LoadingState } from "../../constants";

interface ErrorFeedbackProps {
  loadingState: string;
}

const ErrorFeedback: React.FC<ErrorFeedbackProps> = ({ loadingState }) => (
  <Alert
    data-testid="error-feedback-message"
    severity={loadingState === LoadingState.Failure ? "error" : "warning"}
  >
    {loadingState === LoadingState.Success && FetchMoviesFeedback.Empty}
    {loadingState === LoadingState.Failure && FetchMoviesFeedback.Failure}
  </Alert>
);

export default ErrorFeedback;
