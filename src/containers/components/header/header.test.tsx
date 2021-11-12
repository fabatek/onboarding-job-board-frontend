import { render } from "@testing-library/react";
import React from "react";
import { Provider } from "react-redux";
import { store } from "../../../redux/store";
import { JobList } from "./header";

describe("Check document in dom", () => {
    it('should render a step form`', () => {
        const { container } = render(<Provider store={store}><JobList /></Provider>);
        expect(container).toBeInTheDocument();
    });
});