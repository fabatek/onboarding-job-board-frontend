import { cleanup, render, waitFor } from "@testing-library/react";
import CustomProvider from "../../../providers/CustomProvider";
import JobCard from "./JobCard";

afterAll(cleanup);

const sampleItem = {
  id: 111,
  jobTitle: "Web Developer",
  image: "https://picsum.photos/200",
  salary: "5000",
  place: "Ho Chi Minh",
  companyName: "Faba Technology",
  category: "Coder",
};

describe("Job Card Component", () => {
  it("should be visible and render correctly", async () => {
    render(
      <CustomProvider>
        <JobCard item={sampleItem} />
      </CustomProvider>
    );
    await waitFor(() => {
      const imageElement = document.querySelector(".logo-company__img");
      expect(imageElement).toBeVisible();
      const titleElement = document.querySelector(".job-card-info__job-title");
      expect(titleElement?.textContent).toBe("Web Developer");
      const companyNameElement = document.querySelector(
        ".job-card-info__company-name"
      );
      expect(companyNameElement?.textContent?.trim()).toBe("Faba Technology");
      const salaryElement = document.querySelector(".job-card-info__salary");
      expect(salaryElement?.textContent?.trim()).toBe("5000");
      const placeElement = document.querySelector(".job-card-info__place");
      expect(placeElement?.textContent?.trim()).toBe("Ho Chi Minh");
    });
  });
});
