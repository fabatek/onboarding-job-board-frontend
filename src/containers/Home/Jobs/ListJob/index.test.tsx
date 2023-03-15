import { render, waitFor, screen} from "@testing-library/react";
import { Provider } from "react-redux";
import ListJob from ".";
import { store } from "../../../Redux/store/store";
jest.mock("../../../util/util")
test('should render loading', () => {
    render(
        <Provider store={store}>
            <ListJob />
        </Provider>)
    const loading = screen.getByText("Loading...")
    expect(loading).toBeInTheDocument()
})
test('should render 100 job', async () => {
    render(
        <Provider store={store}>
            <ListJob />
        </Provider>)
    await waitFor(()=>expect(document.querySelector('li')).toHaveLength(100))
})