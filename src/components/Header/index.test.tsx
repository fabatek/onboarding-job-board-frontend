import { render } from '@testing-library/react'
import { Provider } from 'react-redux';
import store from '../../state/store';
import Header from './index'

test("render header bar", async () => {
  const { getByText } = render(<Provider store={store}><Header /></Provider>);
  const brand = getByText(/ITVIET/i);
  const allJobs = getByText(/Việc Làm IT/i);
  const allCompanies = getByText(/Công Ty IT/i);
  const signIn = getByText(/Đăng Nhập/i);
  const signUp = getByText(/Đăng Ký/i);
  expect(brand).toBeTruthy();
  expect(allJobs).toBeTruthy();
  expect(allCompanies).toBeTruthy();
  expect(signIn).toBeTruthy();
  expect(signUp).toBeTruthy();
})