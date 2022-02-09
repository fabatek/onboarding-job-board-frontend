import { render } from "@testing-library/react"
import { Provider } from "react-redux"
import JobContentPreview from "."
import store from "../../state/store"


describe("JobContentPreview", () => {
  it("should diplay job infor", () => {
    const { getByText, getByRole } = render(<Provider store={store}>
      <JobContentPreview
        title="Manual tester"
        salary={400}
        benefits="There are many benefits"
        company="AB Company"
        description="This is description"
        requirement="There are 3 requirements"
      />
    </Provider>);
    const titleElement = getByText(/manual tester/i);
    const salaryElement = getByText(/400 usd/i);
    const benefitElement = getByText(/there are many benefits/i);
    const companyElement = getByText(/ab company/i);
    const descriptionElement = getByText(/this is description/i);
    const requirementElement = getByText(/there are 3 requirements/i);
    const applyElement = getByRole('button', { name: "Apply Now" });
    expect(titleElement).toBeInTheDocument();
    expect(salaryElement).toBeInTheDocument();
    expect(benefitElement).toBeInTheDocument();
    expect(companyElement).toBeInTheDocument();
    expect(descriptionElement).toBeInTheDocument();
    expect(requirementElement).toBeInTheDocument();
    expect(applyElement).toBeInTheDocument()
  })
})