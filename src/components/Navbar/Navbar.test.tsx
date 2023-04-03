import { cleanup, render } from "@testing-library/react";
import CustomProvider from "../../providers/CustomProvider";
import { navbarItemLeft, navbarItemRight } from "../../static/data";
import Navbar from "./Navbar";

afterAll(cleanup);

describe("Navbar Component", () => {
  it("should render the navbar successfully", async () => {
    const { findAllByRole } = render(
      <CustomProvider>
        <Navbar />
      </CustomProvider>
    );
    const itemLink = await findAllByRole("link");
    expect(itemLink).not.toBeNull();
  });

  it("should render the correct number of item link", async () => {
    const length = navbarItemLeft.length + navbarItemRight.length;
    const { findAllByRole } = render(
      <CustomProvider>
        <Navbar />
      </CustomProvider>
    );
    const linkElement = await findAllByRole("link");
    expect(linkElement.length).toBe(length);
  });
});
