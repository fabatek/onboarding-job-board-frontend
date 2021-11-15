import { render } from '@testing-library/react'
import { Provider } from 'react-redux';
import store from '../../state/store';
import Header from './index'

test("render header bar", async () => {
  const { container } = render(<Provider store={store}><Header /></Provider>);
  expect(container).toBeInTheDocument();
})