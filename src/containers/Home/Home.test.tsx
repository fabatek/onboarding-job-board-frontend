import { render } from "@testing-library/react";
import React from "react";
import { Provider } from "react-redux";
import store from "../../redux/store";

import Container from "./Container/Container";
import Header from "./Header/Header";
import Search from "./Search/Search";

describe('renders learn three components', () => {
    it('render header component', () => {
        render(<Header />)
    })
    it('render search component', () => {
        render(<Search />)
    })
    it('render provider component', () => {
        expect(render(<Provider store={store}><Container /></Provider>))
    })

});