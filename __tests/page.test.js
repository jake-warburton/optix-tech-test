/**
 * @jest-environment jsdom
 */

import { fireEvent, render } from "@testing-library/react";
import "@testing-library/jest-dom";

import Page from "../src/pages/index";
import { FetchMoviesFeedback } from "../src/constants";
import { LoadingState } from "../src/constants";
import { mockMovies } from "./mockData";

describe("when passed an array of movies", () => {
  it("displays the correct count", () => {
    const { queryByTestId } = render(
      <Page
        movies={mockMovies}
        loadingState={LoadingState.Success}
        refreshData={() => {}}
      />
    );

    const movieCounter = queryByTestId("movies-counter");

    expect(movieCounter).toBeTruthy();
    expect(movieCounter.textContent).toMatch(`${mockMovies.length} movies`);
  });
});

describe("when passed an empty array of movies", () => {
  it("Displays an error message if the API call was successful", () => {
    const { queryByTestId } = render(
      <Page
        movies={[]}
        loadingState={LoadingState.Success}
        refreshData={() => {}}
      />
    );

    const feedbackMessage = queryByTestId("error-feedback-message");

    expect(feedbackMessage).toBeTruthy();
    expect(feedbackMessage.textContent).toMatch(FetchMoviesFeedback.Empty);
  });

  it("Displays an error message if the API call results in an error", () => {
    const { queryByTestId } = render(
      <Page
        movies={[]}
        loadingState={LoadingState.Failure}
        refreshData={() => {}}
      />
    );

    const feedbackMessage = queryByTestId("error-feedback-message");

    expect(feedbackMessage).toBeTruthy();
    expect(feedbackMessage.textContent).toMatch(FetchMoviesFeedback.Failure);
  });
});

describe("When the user clicks a row", () => {
  it("highlights the selected row", () => {
    const { queryByTestId } = render(
      <Page
        movies={mockMovies}
        loadingState={LoadingState.Success}
        refreshData={() => {}}
      />
    );

    const row = queryByTestId(`movie-row-${mockMovies[0].id}`);

    expect(row).toBeTruthy();

    fireEvent.click(row);

    expect(row.classList).toContain("Mui-selected");
  });

  it("opens the movie review modal", () => {
    const { queryByTestId } = render(
      <Page
        movies={mockMovies}
        loadingState={LoadingState.Success}
        refreshData={() => {}}
      />
    );

    const row = queryByTestId(`movie-row-${mockMovies[0].id}`);

    expect(row).toBeTruthy();

    fireEvent.click(row);

    const modal = queryByTestId("movie-review-modal");

    expect(modal).toBeInTheDocument();
  });
});
