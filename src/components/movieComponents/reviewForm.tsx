import { useState, useEffect, ChangeEvent } from "react";
import { Alert, Box, Chip, CircularProgress, TextField } from "@mui/material";

import { postMovieReview } from "../../api/movies";
import { Movie } from "../../commonInterfaces";
import { MOVIE_FEEDBACK_REVIEW } from "../../constants";
import Button from "../elements/button";

interface ReviewFormProps {
  movie?: Movie;
}

const ReviewForm: React.FC<ReviewFormProps> = ({ movie }) => {
  const [reviewContent, setReviewContent] = useState<string>("");
  const [submissionFeedback, setSubmissionFeedback] = useState<string>("");
  const [submitting, setSubmitting] = useState<boolean>(false);
  const [submittedSuccessfully, setSubmittedSuccessfully] =
    useState<boolean>(false);

  useEffect(() => {
    setReviewContent("");
    setSubmissionFeedback("");
    setSubmittedSuccessfully(false);
  }, [movie]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setReviewContent(e.target.value);
  };

  const handleSubmit = async () => {
    if (reviewContent.length > 100 || reviewContent.length < 1) return;

    setSubmitting(true);

    const { message, success } = await postMovieReview(reviewContent);

    setSubmissionFeedback(message);
    setSubmittedSuccessfully(success);
    setSubmitting(false);
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      width="100%"
      justifyContent="center"
      alignItems="center"
    >
      {movie ? <Chip label={movie.title} /> : <CircularProgress />}

      <Box width="100%" marginY="20px">
        <TextField
          value={reviewContent}
          onChange={handleChange}
          error={reviewContent.length > 100}
          helperText={
            reviewContent.length > 100 && MOVIE_FEEDBACK_REVIEW.TooLong
          }
          placeholder={MOVIE_FEEDBACK_REVIEW.Placeholder}
          fullWidth
          margin="normal"
          disabled={submitting}
        />

        {submissionFeedback && (
          <Alert severity={submittedSuccessfully ? "success" : "error"}>
            {submissionFeedback}
          </Alert>
        )}
      </Box>

      {!submittedSuccessfully && (
        <Box width="100%" display="flex" justifyContent="flex-end">
          {submitting ? (
            <Box width="100%" display="flex" justifyContent="center">
              <CircularProgress />
            </Box>
          ) : (
            <Button
              id="movie-review-submit"
              color="success"
              disabled={reviewContent.length > 100 || reviewContent.length < 1}
              onClick={handleSubmit}
            >
              Submit review
            </Button>
          )}
        </Box>
      )}
    </Box>
  );
};

export default ReviewForm;
