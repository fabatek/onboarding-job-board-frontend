import { render, waitFor, screen, cleanup} from "@testing-library/react";
import { Provider } from "react-redux";
import ListJob from ".";
import { store } from "../../../Redux/store/store";
jest.mock("../../../util/util.ts")
afterEach(cleanup)
test('should render loading', () => {
    render(
        <Provider store={store}>
            <ListJob />
        </Provider>)
    const loading = screen.getByTestId("loading")
    expect(loading).toBeInTheDocument()
})
test('should have id job in the document', () => {
    render(
        <Provider store={store}>
            <ListJob />
        </Provider>)
        const testJob = screen.getByTestId("test100Job")
        expect(testJob).toBeInTheDocument()
})
test('should render 100 jobs', async () => {
    render(
        <Provider store={store}>
            <ListJob />
        </Provider>)
    const listJob = await waitFor(()=>{document.querySelectorAll("li").length})
    expect(listJob).toHaveLength(100);
})