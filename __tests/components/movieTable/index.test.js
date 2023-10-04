/**
 * @jest-environment jsdom
 */

import React from "react";
import { render } from "@testing-library/react";

import Table from "../../../src/components/movieTable";

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
  it("Displays a child element for each movie in the array", () => {
    const { queryByTestId } = render(<Table movies={mockMovies} />);

    const movieTable = queryByTestId("movie-table");

    expect(movieTable).toBeTruthy();
    expect(movieTable.childNodes.length).toEqual(mockMovies.length);
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
