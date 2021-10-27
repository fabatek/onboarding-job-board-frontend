import { render } from "@testing-library/react";
import React from "react";
import { Provider } from "react-redux";
import store from "../../redux/store";

import Container from "./Container/Container";
import Header from "./Header/Header";
import Search from "./Search/Search";

test('renders learn three components', () => {
    render(<Header />)
    render(<Search />)
    render(<Provider store={store}><Container/></Provider>)
});