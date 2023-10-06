/**
 * @jest-environment jsdom
 */

import { render } from "@testing-library/react";

import Row from "../../../../src/components/movieComponents/movieTable/row";
import { mockMovie } from "../../../mockData";

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
