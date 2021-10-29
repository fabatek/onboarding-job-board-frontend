import React from "react";
import { render } from "@testing-library/react";
import Search from "./Search";

it('input search value',()=>{
    const {queryAllByTestId, queryAllByPlaceholderText} = render(<Search />)
    expect(queryAllByTestId("search-button")).toBeTruthy()
    expect(queryAllByPlaceholderText('Tìm kiếm theo kỹ năng, chức vụ, công ty,...')).toBeTruthy()
})

