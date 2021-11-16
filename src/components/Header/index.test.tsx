import { render } from '@testing-library/react'
import { Provider } from 'react-redux';
import store from '../../state/store';
import Header from './index'

test("render header bar", async () => {
  const { getByText } = render(<Provider store={store}><Header /></Provider>);
  const brand = getByText(/Job-Board/i);
  const allJobs = getByText(/All jobs/i);
  const allCompanies = getByText(/All companies/i);
  const signIn = getByText(/Sign in/i);
  const signUp = getByText(/Sign up/i);
  expect(brand).toBeTruthy();
  expect(allJobs).toBeTruthy();
  expect(allCompanies).toBeTruthy();
  expect(signIn).toBeTruthy();
  expect(signUp).toBeTruthy();
})