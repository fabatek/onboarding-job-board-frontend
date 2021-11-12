import { render } from "@testing-library/react";
import { Pagination } from "./pagination";

describe('Pagination jobs', () => {
    it('should DOM render pagination component', () => {
      const { container } = render(<Pagination />);
      expect(container).toBeInTheDocument();
    });
});