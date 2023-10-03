/**
 * @jest-environment jsdom
 */

import { render } from "@testing-library/react";

import Table from "../../../src/components/movieTable/table";

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
    expect(movieTable.children.length).toEqual(mockMovies.length);
  });

  /*
  it("Displays a loading state while waiting for movies to return from the API", () => {
    //  mock api call to be in progress and check if child within table has loading test id
    expect(1 + 1).toEqual(3);
  });

  it("Displays an error message if no movies were returned from a completed API call", () => {
    //  mock api call to return an empty array
    expect(1 + 1).toEqual(3);
  });

  it("Displays an error message of the API call results in an error", () => {
    //  mock api call to return a 500 error
    expect(1 + 1).toEqual(3);
  });
  */
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
