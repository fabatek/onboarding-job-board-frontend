import { render }from "@testing-library/react";
import React from "react";
import { Provider } from "react-redux";
import store from "../../redux/store";

import Container from "./Container/Container";
import Header from "./Header/Header";
import Search from "./Search/Search";

describe('renders learn three components', () => {
   it('it must render Header Component',()=>{
    render(<Header />)
   })
   it('it must render Search Component',()=>{
    render(<Search />)
   })
   it('it must render Container Component',()=>{
    render(<Provider store={store}><Container /></Provider>)
   })
});