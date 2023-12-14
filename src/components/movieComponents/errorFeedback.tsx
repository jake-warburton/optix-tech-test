import { Alert } from "@mui/material";

import { FETCH_MOVIES_FEEDBACK, LOADING_STATE } from "../../constants";

interface ErrorFeedbackProps {
  loadingState: string;
}

const ErrorFeedback: React.FC<ErrorFeedbackProps> = ({ loadingState }) => (
  <Alert
    data-testid="error-feedback-message"
    severity={loadingState === LOADING_STATE.Failure ? "error" : "warning"}
  >
    {loadingState === LOADING_STATE.Success && FETCH_MOVIES_FEEDBACK.Empty}
    {loadingState === LOADING_STATE.Failure && FETCH_MOVIES_FEEDBACK.Failure}
  </Alert>
);

export default ErrorFeedback;
