import {render,screen} from "@testing-library/react";
import Search from "./index";
import axios from "axios";
test('renders inital document', () => {
    render(<Search/>);
    const divEle = screen.getByTestId("id1");
    expect(divEle).toBeInTheDocument;   
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