import { render, screen } from "@testing-library/react";
import React from "react";
import SearchBox from './index';

test('Should render input', () => {
    const availableJobs:number = 50;
    const totalJobs:number = 100;
    render(<SearchBox/>);
    const searchingElement = screen.getAllByTestId('searching_box')
    expect(searchingElement).toBeInTheDocument()
    expect(searchingElement).toBeCalledTimes(1)
    expect(searchingElement).toHaveTextContent('100') 
})
