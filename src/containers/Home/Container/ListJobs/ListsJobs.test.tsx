import React from "react";
import {render} from "@testing-library/react"
import ListsJobs from "./ListsJobs";
import { Provider } from "react-redux";
import store from "../../../../redux/store";

describe('Render title of List Jobs',()=>{
    it('It should render number of jobs',()=>{
        const {container} = render(<Provider store={store}><ListsJobs/></Provider>)
        expect(container).toBeInTheDocument()
        expect(container.getElementsByClassName('jobs__title')).toBeTruthy()
    })
})