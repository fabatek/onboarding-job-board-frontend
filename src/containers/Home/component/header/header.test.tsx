import { render, screen } from "@testing-library/react";
import React from "react";
import Header from ".";


test('should render header', () => {
    render(<Header/>);
    const headerElement = screen.getByTestId('header')
    expect(headerElement).toBeInTheDocument()
    expect(headerElement).toHaveTextContent('VietNam Best IT Companies')

    const dropdownMenu = screen.getByTestId('dropdown_nav')
    expect(dropdownMenu).toBeInTheDocument()
    expect(dropdownMenu).toBeVisible()
})