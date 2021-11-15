import { render } from "@testing-library/react"
import { Provider } from "react-redux";
import SearchHeader from "."
import store from "../../state/store";


describe("SearchHeader", () => {
  it("should be render number of jobs", () => {
    const { container } = render(<Provider store={store}><SearchHeader /></Provider>);
    expect(container).toBeInTheDocument();
  })
})