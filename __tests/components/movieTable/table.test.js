/**
 * @jest-environment jsdom
 */

import React from "react";
import { render } from "@testing-library/react";

import Table from "../../../src/components/movieTable/table";
import { FETCH_MOVIES } from "../../../src/constants";

const mockMovies = [
  {
    id: "1",
    reviews: [6, 8, 3, 9, 8, 7, 8],
    title: "A Testing Film",
    filmCompanyId: "1",
    cost: 534,
    releaseYear: 2005,
  },
  {
    id: "2",
    reviews: [5, 7, 3, 4, 1, 6, 3],
    title: "Mock Test Film",
    filmCompanyId: "1",
    cost: 6234,
    releaseYear: 2006,
  },
];

describe("when passed an array of movies", () => {
  it("displays the correct count", () => {
    const { queryByTestId } = render(<Table movies={mockMovies} />);

    const movieCounter = queryByTestId("movie-counter");

    expect(movieCounter).toBeTruthy();
    expect(movieCounter.textContent).toMatch(`${mockMovies.length} Movies`);
  });

  it("Displays a child element for each movie in the array", () => {
    const { queryByTestId } = render(<Table movies={mockMovies} />);

    const movieTable = queryByTestId("movie-table");

    expect(movieTable).toBeTruthy();
    expect(movieTable.childNodes.length).toEqual(mockMovies.length);
  });

  it("Displays a loading state while waiting for movies to return from the API", () => {
    const { queryByTestId } = render(
      <Table movies={[]} loadingState="loading" />
    );

    const loadingIcon = queryByTestId("loading-icon");

    expect(loadingIcon).toBeTruthy();
  });

  it("Displays an error message if no movies were returned from a completed API call", () => {
    const { queryByTestId } = render(
      <Table movies={[]} loadingState="success" />
    );

    const feedbackMessage = queryByTestId("feedback-message");

    expect(feedbackMessage).toBeTruthy();
    expect(feedbackMessage.textContent).toMatch(FETCH_MOVIES.EMPTY);
  });

  it("Displays an error message if the API call results in an error", () => {
    const { queryByTestId } = render(
      <Table movies={[]} loadingState="failure" />
    );

    const feedbackMessage = queryByTestId("feedback-message");

    expect(feedbackMessage).toBeTruthy();
    expect(feedbackMessage.textContent).toMatch(FETCH_MOVIES.FAILURE);
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
