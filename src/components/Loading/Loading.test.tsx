import { render } from "@testing-library/react";
import CustomProvider from "../../providers/CustomProvider";
import Loading from "./Loading";

it("should render loading status successfully", async () => {
  const { findByTestId } = render(
    <CustomProvider>
      <Loading />
    </CustomProvider>
  );
  const loadingStatus = await findByTestId("loading");
  expect(loadingStatus).toBeInTheDocument();
});
