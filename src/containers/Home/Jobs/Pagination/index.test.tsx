import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import Pagination from ".";
import { store } from "../../../Redux/store/store";

test('should render Pagination', async()=>{
    render(<Provider store={store}>
        <Pagination jobsPerPage={1} totalJobs={1} paginate={undefined} currentPage={1} totalSearchJob={0}/>
    </Provider>)
    const pagination = await screen.findByTestId("pagination")
    expect(pagination).toBeInTheDocument()
} )