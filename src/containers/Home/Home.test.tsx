import { render } from "@testing-library/react";
import Header from "../../components/Header";
import { Provider } from 'react-redux';
import store from '../../store'
test('renders learn react link', () => {
  const { container } = render(<Provider store={store}><Header /></Provider>);
  expect(container).toBeInTheDocument();
});
