import { sortByKey } from "../../src/utilities/sortByKey";
import { SORT_DIRECTIONS } from "../../src/constants";

import { mockMovies } from "../mockData";

describe("When passed a basic unsorted array of data, a key to sort by and the sort direction", () => {
  it("returns the array sorted", () => {
    const unsortedArray = [{ id: 7 }, { id: 2 }, { id: 8 }, { id: 9 }];

    const sortedArray = sortByKey(
      unsortedArray,
      "id",
      SORT_DIRECTIONS.Ascending
    );

    expect(sortedArray[0].id).toEqual(2);
    expect(sortedArray[3].id).toEqual(9);
  });
});

describe("When passed an unsorted array of movies, a key to sort by and the sort direction", () => {
  it("returns the array sorted by id and desc", () => {
    const sortedArray = sortByKey(mockMovies, "id", SORT_DIRECTIONS.Descending);

    expect(sortedArray[0].id).toEqual("3");
    expect(sortedArray[2].id).toEqual("1");
  });

  it("returns the array sorted by average score and asc", () => {
    const sortedArray = sortByKey(
      mockMovies,
      "averageScore",
      SORT_DIRECTIONS.Ascending
    );

    expect(sortedArray[0].id).toEqual("2");
    expect(sortedArray[1].id).toEqual("3");
    expect(sortedArray[2].id).toEqual("1");
  });

  it("returns the array sorted by film company name and desc", () => {
    const sortedArray = sortByKey(
      mockMovies,
      "filmCompanyName",
      SORT_DIRECTIONS.Descending
    );

    expect(sortedArray[0].id).toEqual("2");
    expect(sortedArray[1].id).toEqual("3");
    expect(sortedArray[2].id).toEqual("1");
  });

  it("returns the array sorted by title and asc", () => {
    const sortedArray = sortByKey(
      mockMovies,
      "title",
      SORT_DIRECTIONS.Ascending
    );

    expect(sortedArray[0].id).toEqual("1");
    expect(sortedArray[1].id).toEqual("3");
    expect(sortedArray[2].id).toEqual("2");
  });
});
