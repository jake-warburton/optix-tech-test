/**
 * @jest-environment jsdom
 */

import { render } from "@testing-library/react";

import Row from "../../../src/components/movieTable/row";

const mockMovie = {
  id: "1",
  reviews: [6, 8, 3, 9, 8, 7, 8],
  averageScore: 7.0,
  title: "A Testing Film",
  filmCompanyId: "1",
  filmCompanyName: "A testing film company",
  cost: 534,
  releaseYear: 2005,
};

describe("When passed a movie object prop", () => {
  let getByText;
  beforeEach(
    () => ({ getByText = getByText } = render(<Row movie={mockMovie} />))
  );

  it("displays the title", () => {
    expect(getByText(mockMovie.title)).toBeTruthy();
  });

  it("displays the average review score to 1 decimal place", () => {
    expect(getByText(mockMovie.averageScore)).toBeTruthy();
  });

  it("displays the film company name", () => {
    expect(getByText(mockMovie.filmCompanyName)).toBeTruthy();
  });
});
