import {render} from "@testing-library/react";
import Search from "./index";
test('renderJob' ,()=>{
    const {getByText} = render(<Search/>);
    expect(getByText).toBeCalledTimes(.4)
})
