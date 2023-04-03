import { render, waitFor } from "@testing-library/react";
import CustomProvider from "../../providers/CustomProvider";
import Loading from "./Loading";

it("should render loading status successfully", async () => {
  render(
    <CustomProvider>
      <Loading />
    </CustomProvider>
  );
  await waitFor(() => {
    const loadingStatus = document.querySelector(".loading");
    expect(loadingStatus).toBeInTheDocument();
  });
});
