/**
 * @jest-environment jsdom
 */

import React from "react";
import { render } from "@testing-library/react";

import Page from "../src/page";
import { FetchMoviesFeedback } from "../src/constants";
import { LoadingState } from "../src/constants";

const mockMovies = [
  {
    id: "1",
    reviews: [6, 8, 3, 9, 8, 7, 8],
    title: "A Testing Film",
    filmCompanyId: "1",
    filmCompanyName: "A testing film company",
    cost: 534,
    releaseYear: 2005,
  },
  {
    id: "2",
    reviews: [5, 7, 3, 4, 1, 6, 3],
    title: "Mock Test Film",
    filmCompanyId: "1",
    filmCompanyName: "A mock film company",
    cost: 6234,
    releaseYear: 2006,
  },
];

describe("when passed an array of movies", () => {
  it("displays the correct count", () => {
    const { queryByTestId } = render(
      <Page
        movies={mockMovies}
        loadingState={LoadingState.Success}
        refreshData={() => {}}
      />
    );

    const movieCounter = queryByTestId("movie-counter");

    expect(movieCounter).toBeTruthy();
    expect(movieCounter.textContent).toMatch(`${mockMovies.length} Movies`);
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

    const feedbackMessage = queryByTestId("feedback-message");

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

    const feedbackMessage = queryByTestId("feedback-message");

    expect(feedbackMessage).toBeTruthy();
    expect(feedbackMessage.textContent).toMatch(FetchMoviesFeedback.Failure);
  });
});

/*
describe("When the user clicks a row", () => {
  it("highlights the selected row", () => {
    //  check for a className present

    const element = queryByTestId(`movie-row-${mockMovie.id}`);
    expect(1 + 1).toEqual(3);
  });
});
*/
