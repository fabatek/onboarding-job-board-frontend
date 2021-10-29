import { render } from "@testing-library/react";
import React from "react";
import { Provider } from "react-redux";
import store from "../../../redux/store";
import ListsJobs from "./ListJobs/ListsJobs";

test('render list jobs', () => {
    expect(render(<Provider store={store}><ListsJobs /></Provider>))
});

