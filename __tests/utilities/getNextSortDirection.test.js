import { getNextSortDirection } from "../../src/utilities/getNextSortDirection";
import { sortDirections } from "../../src/constants";

describe("When passed a current sort direction", () => {
  it("returns desc when passed undefined", () => {
    const nextSortDirection = getNextSortDirection(undefined);

    expect(nextSortDirection).toEqual(sortDirections.Descending);
  });

  it("returns asc when passed desc", () => {
    const nextSortDirection = getNextSortDirection(sortDirections.Descending);

    expect(nextSortDirection).toEqual(sortDirections.Ascending);
  });

  it("returns undefined when passed asc", () => {
    const nextSortDirection = getNextSortDirection(sortDirections.Ascending);

    expect(nextSortDirection).toEqual(undefined);
  });
});
