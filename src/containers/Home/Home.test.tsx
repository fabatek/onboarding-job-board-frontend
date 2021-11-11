import { render } from "@testing-library/react";
import Header from "../../components/Header";
import { Provider } from 'react-redux';
import store from '../../store'

describe("Step form reandering", () => {
  it('it should render a step form`', () => {
    const { container } = render(<Provider store={store}><Header /></Provider>);
    expect(container).toBeInTheDocument();
  });
});
