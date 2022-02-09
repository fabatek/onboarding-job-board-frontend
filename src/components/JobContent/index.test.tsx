import { render } from "@testing-library/react"
import { Provider } from "react-redux"
import JobContent from "."
import store from "../../state/store"


describe("JobContent", () => {
  it("should render a job", () => {
    const { getByText } = render(<Provider store={store}>
      <JobContent
        title="Manual tester"
        salary={400}
        benefits="There are many benefits"
        company="AB Company"
        clickHandler={jest.fn()}
        isSelected={false}
      />
    </Provider>);
    const titleElement = getByText(/manual tester/i);
    const salaryElement = getByText(/400 usd/i);
    const benefitElement = getByText(/there are many benefits/i);
    const companyElement = getByText(/ab company/i);
    expect(titleElement).toBeInTheDocument();
    expect(salaryElement).toBeInTheDocument();
    expect(benefitElement).toBeInTheDocument();
    expect(companyElement).toBeInTheDocument();
  })
})