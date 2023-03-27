import { render, waitFor, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import ListJob from ".";
import { store } from "../../../Redux/store/store";

jest.mock("../../../util/util.ts")
test('should render job', async () => {
    render(
        <Provider store={store}>
            <ListJob currentJobs={[{ jobName: "Lead Integration Associate", city: "Gibsonstad", moTa: "Dynamic", id: "1", img: "https://loremflickr.com/640/480/city", tech: "Assistant" }]} />
        </Provider>
    )
    const jobs = await screen.findByTestId("test100Jobs")
    await waitFor(() => expect(jobs).toBeInTheDocument())
})