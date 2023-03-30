import { render, waitFor } from "@testing-library/react";
import CustomProvider from "../../providers/CustomProvider";
import JobDetail from "./JobDetail";

describe("Job Detail Page", () => {
  it("should render correctly", async () => {
    render(
      <CustomProvider>
        <JobDetail />
      </CustomProvider>
    );
    await waitFor(() => {
      const jobDetailPage = document.querySelector(".job-detail-page");
      expect(jobDetailPage).toBeVisible();
    });
  });
});
