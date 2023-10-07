import { getAverageMovieScore } from "../../src/utilities/getAverageMovieScore";

describe("When passed an array of numbers", () => {
  it("returns the correct value to one decimal place", () => {
    const result = getAverageMovieScore([5, 6, 3, 1, 8, 8, 4, 2, 5]);

    expect(result).toEqual("4.7");
  });
});
