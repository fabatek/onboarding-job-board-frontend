import {render} from "@testing-library/react";
import JobList from './JobList';
import React from "react";

import {store} from '../../../../../store/store';
import {Provider} from 'react-redux';

test('render JobList components', () => {

    const { getByText } = render(
        <Provider store={store}>
            <JobList />
        </Provider>
    );
    
    const linkElement = getByText(/IT jobs are available/i);
    expect(linkElement).toBeInTheDocument();
  });
  