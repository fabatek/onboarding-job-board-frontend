import { render } from "@testing-library/react";
import CustomProvider from "../../providers/CustomProvider";
import CompanyCard from "./CompanyCard";

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
    const { findByText } = render(
      <CustomProvider>
        <CompanyCard jobItem={sampleJobItem} />
      </CustomProvider>
    );
    const companyImg = document.querySelector(".card-img-top");
    const companyName = await findByText("Faba Technology");
    const companyDescription = await findByText(
      "Công ty phần mềm ở Hồ Chí Minh"
    );
    expect(companyImg).toBeVisible();
    expect(companyName.textContent).toBe("Faba Technology");
    expect(companyDescription.textContent).toBe(
      "Công ty phần mềm ở Hồ Chí Minh"
    );
  });
});
