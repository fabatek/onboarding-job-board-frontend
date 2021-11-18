import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import Pagination, { generatePageItems } from ".";
import { store } from "../../store";

describe("With React Testing <Pagination/>", () => {
    it("should fn generatePageItems MINIMAL_PAGE_ITEM_COUNT=5", () => {
        expect(() => {
          generatePageItems(10, 0, 4);
        }).toThrow(`Must allow at least  page items`);
        expect(() => {
          generatePageItems(10, 0, 6);
        }).toThrow(new Error("Must allow odd number of page items"));
        expect(generatePageItems(10, 0, 7)).toEqual([
          0,
          1,
          2,
          3,
          4,
          "next-more",
          9,
        ]);
        expect(generatePageItems(10, 4, 7)).toEqual([
          0,
          "prev-more",
          3,
          4,
          5,
          "next-more",
          9,
        ]);
        expect(generatePageItems(10, 6, 7)).toEqual([
          0,
          "prev-more",
          5,
          6,
          7,
          8,
          9,
        ]);
        expect(generatePageItems(1, 0, 7)).toEqual([0]);
      });
    it('should render Pagination', () => {
        const { container } = render(<Provider store={store}>
            <BrowserRouter>
            <Pagination url={`/page/`} pageCount={10} currentPage={0} />
            </BrowserRouter>
            </Provider>);
          expect(container).toBeInTheDocument();
    });
});
