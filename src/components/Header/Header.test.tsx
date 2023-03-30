import { render, waitFor } from "@testing-library/react";
import CustomProvider from "../../providers/CustomProvider";
import Header from "./Header";

describe("Header", () => {
  it("should render correctly", async () => {
    render(
      <CustomProvider>
        <Header />
      </CustomProvider>
    );
    await waitFor(() => {
      const headerComponent = document.querySelector(".header");
      expect(headerComponent).toBeVisible();
    });
  });
});
