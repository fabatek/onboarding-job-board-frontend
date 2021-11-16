import { render } from "@testing-library/react"
import { Provider } from "react-redux"
import JobList from "./index"
import store from "../../state/store"


describe("JobList", () => {
  it("should render first job", async () => {
    const { findByTestId } = render(<Provider store={store}><JobList /></Provider>);
    const jobContentElement = await findByTestId("job-content-0");
    expect(jobContentElement).toBeInTheDocument();
  })
})