import { render, screen } from "@testing-library/react";
import Pagination from ".";
test('should render Pagination', async()=>{
    render(<Pagination jobsPerPage={1} totalJobs={1} paginate={undefined} currentPage={1}/>)
    const pagination = await screen.findByTestId("pagination")
    expect(pagination).toBeInTheDocument()
} )