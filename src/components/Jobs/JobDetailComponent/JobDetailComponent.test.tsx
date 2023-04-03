import { render, waitFor } from "@testing-library/react";
import CustomProvider from "../../../providers/CustomProvider";
import JobDetailComponent from "./JobDetailComponent";

const sampleJobItem = {
  id: 111,
  jobTitle: "Web Developer",
  image: "https://picsum.photos/200",
  salary: "5000",
  place: "Ho Chi Minh",
  companyName: "Faba Technology",
  companyDescription: "Công ty phần mềm ở Hồ Chí Minh",
  category: "Coder",
  jobDescription: "Job Description 111",
  jobRequirement: "Job Requirement 111",
};

describe("Company Card", () => {
  it("should be visible and display the company information correctly", async () => {
    render(
      <CustomProvider>
        <JobDetailComponent jobItem={sampleJobItem} />
      </CustomProvider>
    );
    await waitFor(() => {
      const jobTitle = document.querySelector(".job-title");
      const jobSalary = document.querySelector(".job-salary");
      const jobPlace = document.querySelector(".job-place");
      const jobCategory = document.querySelector(".job-category");
      const jobDescription = document.querySelector(".job-description");
      const jobRequirement = document.querySelector(".job-requirement");
      expect(jobTitle?.textContent).toEqual("Web Developer");
      expect(jobSalary?.textContent).toEqual("5000");
      expect(jobPlace?.textContent).toEqual("Ho Chi Minh");
      expect(jobCategory?.textContent).toEqual("Coder");
      expect(jobDescription?.textContent).toEqual("Job Description 111");
      expect(jobRequirement?.textContent).toEqual("Job Requirement 111");
    });
  });
});
