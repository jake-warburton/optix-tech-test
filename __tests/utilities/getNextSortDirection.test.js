import { getNextSortDirection } from "../../src/utilities/getNextSortDirection";
import { SORT_DIRECTIONS } from "../../src/constants";

describe("When passed a current sort direction", () => {
  it("returns desc when passed undefined", () => {
    const nextSortDirection = getNextSortDirection(undefined);

    expect(nextSortDirection).toEqual(SORT_DIRECTIONS.Descending);
  });

  it("returns asc when passed desc", () => {
    const nextSortDirection = getNextSortDirection(SORT_DIRECTIONS.Descending);

    expect(nextSortDirection).toEqual(SORT_DIRECTIONS.Ascending);
  });

  it("returns undefined when passed asc", () => {
    const nextSortDirection = getNextSortDirection(SORT_DIRECTIONS.Ascending);

    expect(nextSortDirection).toEqual(undefined);
  });
});
