import { cleanup, render } from "@testing-library/react";
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
};

describe("Job Card Component", () => {
  it("should be visible", async () => {
    const { findByTestId } = render(
      <CustomProvider>
        <JobCard item={sampleItem} />
      </CustomProvider>
    );
    const imageElement = await findByTestId("job-card__img");
    expect(imageElement).toBeVisible();
    const titleElement = await findByTestId("job-card__title");
    expect(titleElement).toBeVisible();
    const companyNameElement = await findByTestId("job-card__company-name");
    expect(companyNameElement).toBeVisible();
    const salaryElement = await findByTestId("job-card__salary");
    expect(salaryElement).toBeVisible();
    const placeElement = await findByTestId("job-card__place");
    expect(placeElement).toBeVisible();
  });

  it("should render correctly", async () => {
    const { findByTestId } = render(
      <CustomProvider>
        <JobCard item={sampleItem} />
      </CustomProvider>
    );
    const imageElement = await findByTestId("job-card__img");
    expect(imageElement).toBeVisible();
    const titleElement = await findByTestId("job-card__title");
    expect(titleElement.textContent).toBe("Web Developer");
    const companyNameElement = await findByTestId("job-card__company-name");
    expect(companyNameElement.textContent?.trim()).toBe("Faba Technology");
    const salaryElement = await findByTestId("job-card__salary");
    expect(salaryElement.textContent?.trim()).toBe("5000");
    const placeElement = await findByTestId("job-card__place");
    expect(placeElement.textContent?.trim()).toBe("Ho Chi Minh");
  });
});
