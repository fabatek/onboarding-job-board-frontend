import {render,screen} from "@testing-library/react";
import Search from "./index";
import axios from "axios";
test('renders inital document', () => {
    render(<Search/>);
    const jobEle = screen.getByTestId("jobTest");
    expect(jobEle).toBeInTheDocument();   
});
test('render 100 jobs', async ()=>{
    let data =0;
    await axios.get(`${process.env.REACT_APP_API_URL}/products`)
       .then(res=>{
        data = res.data.length;
       })
       .catch(error => console.log(error));
    expect(data).toBe(100);
})
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