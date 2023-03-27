import { render, screen } from "@testing-library/react";
import Search from "./index";
import { Provider } from "react-redux";
import { store } from "../../Redux/store/store";

test('renders inital document', () => {
    render(<Provider store={store}>
        <Search />
    </Provider>);
    const jobElement = screen.getByTestId("jobTest");
    expect(jobElement).toBeInTheDocument();
});
test('selection default is All Cities', () => {
    render(<Provider store={store}>
        <Search />
    </Provider>)
    const seclectEle = screen.getByDisplayValue("All Cities");
    expect(seclectEle).toBeInTheDocument();
})
test('input search should be "" ', () => {
    render(<Provider store={store}>
        <Search />
    </Provider>)
    const searchInput = screen.getByPlaceholderText(/Search/i);
    expect(searchInput.nodeValue).toBe(null);
})