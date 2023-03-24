import { render } from "@testing-library/react";
import Loading from "./Loading";

describe("Loading component", () => {
  test("Loading testid", () => {
    const { getByTestId } = render(<Loading />);
    expect(getByTestId("loading-testid")).toBeInTheDocument();
  });
});
