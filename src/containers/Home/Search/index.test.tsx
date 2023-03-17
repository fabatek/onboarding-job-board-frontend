import {render,screen} from "@testing-library/react";
import Search from "./index";
test('renders inital document', () => {
    render(<Search/>);
    const jobElement = screen.getByTestId("jobTest");
    expect(jobElement).toBeInTheDocument();   
});
test('selection default is All Cities',  ()=>{
    render(<Search/>)
    const seclectEle = screen.getByDisplayValue("All Cities"); 
    expect(seclectEle).toBeInTheDocument();
})
test('input search should be "" ',  ()=>{
    render(<Search/>)
    const searchInput = screen.getByPlaceholderText(/Search/i); 
    expect(searchInput.nodeValue).toBe(null);
})