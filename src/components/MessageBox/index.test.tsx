import { render } from "@testing-library/react"
import MessageBox from "./index"


describe("MessageBox", () => {
  it("should render message box", () => {
    const { getByText } = render(<MessageBox variant="danger">Error</MessageBox>);
    const messageElement = getByText(/error/i);
    expect(messageElement).toBeInTheDocument();
  })
})