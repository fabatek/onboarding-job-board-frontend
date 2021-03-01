import { render } from '@testing-library/react';
// import Home from "../Home/Home";
import React from 'react';
import { Provider } from 'react-redux';
import Home from '.';
import {store} from '../../store/store';

test('renders learn react link', () => {
  const { getByText } = render(
      <Provider store={store}>
        <Home />
      </Provider>
      
  );
  const linkElement = getByText(/IT jobs are available/i);
  expect(linkElement).toBeInTheDocument();
});
