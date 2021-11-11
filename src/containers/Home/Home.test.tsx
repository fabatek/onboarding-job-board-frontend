import { render } from "@testing-library/react";
import Header from "../../components/Header";
import { Provider } from 'react-redux';
import store from '../../store'
<<<<<<< HEAD

describe("Step form reandering", () => {
  it('it should render a step form`', () => {
    const { container } = render(<Provider store={store}><Header /></Provider>);
    expect(container).toBeInTheDocument();
  });
=======
test('renders learn react link', () => {
  const { container } = render(<Provider store = {store}><Header /></Provider>);
  expect(container).toBeInTheDocument();
>>>>>>> 7b44d4d19e513edb805d5a0e39bfa89ef55dde3d
});
