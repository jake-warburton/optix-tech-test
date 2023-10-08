import { useState, useEffect } from "react";
import { Alert, Box, Chip, CircularProgress, TextField } from "@mui/material";

import { postMovieReview } from "../../api/movies";
import { Movie } from "../../commonInterfaces";
import { MovieReviewFeedback } from "../../constants";
import Button from "../elements/button";

interface ReviewFormProps {
  movie?: Movie;
}

const ReviewForm: React.FC<ReviewFormProps> = ({ movie }) => {
  const [reviewContent, setReviewContent] = useState<string>("");
  const [submissionFeedback, setSubmissionFeedback] = useState<string>("");
  const [submittedSuccessfully, setSubmittedSuccessfully] =
    useState<boolean>(false);

  useEffect(() => {
    setReviewContent("");
    setSubmissionFeedback("");
    setSubmittedSuccessfully(false);
  }, [movie]);

  const handleChange = (e: any) => {
    e.preventDefault();
    setReviewContent(e.target.value);
  };

  const handleSubmit = async () => {
    if (reviewContent.length > 100 || reviewContent.length < 1) return;

    const { message, success } = await postMovieReview(reviewContent);

    setSubmissionFeedback(message);
    setSubmittedSuccessfully(success);
  };

  return (
    <Box
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {movie ? <Chip label={movie.title} /> : <CircularProgress />}

      <Box style={{ width: "100%", margin: "20px 0px" }}>
        {submissionFeedback ? (
          <Alert severity={submittedSuccessfully ? "success" : "error"}>
            {submissionFeedback}
          </Alert>
        ) : (
          <TextField
            value={reviewContent}
            onChange={handleChange}
            error={reviewContent.length > 100}
            helperText={
              reviewContent.length > 100 && MovieReviewFeedback.TooLong
            }
            placeholder={MovieReviewFeedback.Placeholder}
            style={{ width: "100%", margin: "30px 0px 20px" }}
          />
        )}
      </Box>

      {!submittedSuccessfully && (
        <Box
          width="100%"
          style={{ display: "flex", justifyContent: "flex-end" }}
        >
          <Button
            id="movie-review-submit"
            color="success"
            disabled={reviewContent.length > 100 || reviewContent.length < 1}
            onClick={handleSubmit}
          >
            Submit review
          </Button>
        </Box>
      )}
    </Box>
  );
};

export default ReviewForm;
