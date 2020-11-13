import {render} from "@testing-library/react";
import Home from "./index";
import React from "react";
import allReducers from '../../reducers'
import {applyMiddleware, createStore} from 'redux'
import {Provider} from 'react-redux'
import thunk from 'redux-thunk'
const store = createStore(
  allReducers,
  applyMiddleware(thunk)  
)
test('renders learn react link', () => {
  const { getByText } = render(
    <Provider store={store}>
      <Home />
    </Provider>
  );
  const linkElement = getByText(/IT Jobs are available/i);
  expect(linkElement).toBeInTheDocument();
});
