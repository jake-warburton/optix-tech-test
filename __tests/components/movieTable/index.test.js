/**
 * @jest-environment jsdom
 */

import React from "react";
import { render } from "@testing-library/react";

import Table from "../../../src/components/movieComponents/movieTable";
import { mockMovies } from "../../mockData";

describe("when passed an array of movies", () => {
  it("Displays a child element for each movie in the array", () => {
    const { queryByTestId } = render(<Table movies={mockMovies} />);

    const movieTable = queryByTestId("movie-table");

    expect(movieTable).toBeTruthy();
    expect(movieTable.childNodes.length).toEqual(mockMovies.length);
  });
});
