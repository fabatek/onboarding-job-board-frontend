import { render, waitFor, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import ListJob from ".";
import { store } from "../../../Redux/store/store";

jest.mock("../../../util/util.ts")
test('should render job', async () => {
    render(
        <Provider store={store}>
            <ListJob currentJobs={[]} />
        </Provider>
    )
    const jobs = await screen.findByTestId("test100Jobs")
    await waitFor(() => expect(jobs).toBeInTheDocument())
})