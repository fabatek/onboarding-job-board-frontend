import { render } from "@testing-library/react";
import CustomProvider from "../../providers/CustomProvider";
import Header from "./Header";

describe("Header", () => {
  it("should render correctly", async () => {
    const { findByTestId } = render(
      <CustomProvider>
        <Header />
      </CustomProvider>
    );
    const headerComponent = await findByTestId("header");
    expect(headerComponent).toBeVisible();
  });
});
