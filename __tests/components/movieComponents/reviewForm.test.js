/**
 * @jest-environment jsdom
 */

import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";

import { MOVIE_FEEDBACK_REVIEW } from "../../../src/constants";
import ReviewForm from "../../../src/components/movieComponents/reviewForm";
import { mockMovie } from "../../mockData";

describe("if the user enters a review over 100 characters", () => {
  it("displays an error message", () => {
    const { getByText, queryByPlaceholderText } = render(
      <ReviewForm id="movie-review-form" movie={mockMovie} />
    );

    const textBox = queryByPlaceholderText(MOVIE_FEEDBACK_REVIEW.Placeholder);
    expect(textBox).toBeTruthy();

    fireEvent.change(textBox, {
      target: { value: "A".repeat(101) },
    });

    const errorMessage = getByText(MOVIE_FEEDBACK_REVIEW.TooLong);
    expect(errorMessage).toBeInTheDocument();
  });

  it("does not allow the user to submit the form", () => {
    const { queryByTestId } = render(
      <ReviewForm id="movie-review-form" movie={mockMovie} />
    );

    const submitButton = queryByTestId("movie-review-submit");
    expect(submitButton).toBeTruthy();

    submitButton.hasAttribute("disabled");
  });
});
