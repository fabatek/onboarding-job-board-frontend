import pagination from "./pagination";

describe("pagination", () => {
  it("render page with current page equal 1", () => {
    const arrRender = pagination(10, 1, 1);
    expect(arrRender).toEqual([1, 2, 3, 4, 5, "...", 10]);
  });
  it("render page with current page equal 5", () => {
    const arrRender = pagination(10, 5, 1);
    expect(arrRender).toEqual([1, "...", 4, 5, 6, "...", 10]);
  });
  it("render page with current page equal 10", () => {
    const arrRender = pagination(10, 10, 1);
    expect(arrRender).toEqual([1, "...", 9, 10]);
  });
});
