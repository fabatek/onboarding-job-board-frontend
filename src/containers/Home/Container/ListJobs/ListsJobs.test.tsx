import React from "react";
import { render} from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect"

import { Provider } from "react-redux";
import ListsJobs from "./ListsJobs";
import store from '../../../../redux/store'

test('check text render', async () => {
    const { getByTestId } = render(<Provider store={store}><ListsJobs /></Provider>)
    const renderEl = getByTestId('test')
    expect(renderEl.textContent).toBe('0 việc làm IT tại Việt Nam')
})




