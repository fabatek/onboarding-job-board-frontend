import { render,screen } from "@testing-library/react";
import Loading from ".";
test('should render loading', () => {
    render(<Loading/>)
    const loading = screen.getByTestId("loading")
    expect(loading).toBeInTheDocument()
})