import { render, waitFor } from "@testing-library/react"
import { Provider } from "react-redux"
import JobList from "./index"
import store from "../../state/store"


describe("JobList", () => {
  it("should render first job", async () => {
    const { findByTestId } = render(<Provider store={store}><JobList /></Provider>);
    await waitFor(() => expect(/job-content-0/i));
    // const jobContentElement = await waitFor(() => findByTestId(/job-content-0/i));
    // expect(jobContentElement).toBeInTheDocument();
  })
})