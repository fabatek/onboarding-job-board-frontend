import {render} from "@testing-library/react";
import JobHeader from './JobHeader';
import React from "react";
import {store} from '../../../../../store/store';
import {Provider} from 'react-redux';

test('render JobHeader components', () => {

    const { getByText } = render(
        <Provider store={store}>
            <JobHeader />
        </Provider>
    );
    const linkElement = getByText(/IT jobs are available/i);
    expect(linkElement).toBeInTheDocument();
  });
  