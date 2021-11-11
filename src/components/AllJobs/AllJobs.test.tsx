import { render } from "@testing-library/react";
import { Provider } from 'react-redux';
import AllJobs from "./AllJobs";
import store from '../../store'

describe("Step form reandering", () => {
  it('it should render a step form`', () => {
    const { container } = render(<Provider store={store}><AllJobs /></Provider>);
    expect(container).toBeInTheDocument();
  });
});

describe("Display jobs test", () => {
  it('renders an `.alljobs`', () => {
    const { container } = render(<Provider store={store}><AllJobs /></Provider>);
    expect(container.querySelectorAll('.alljobs').length).toBe(1);
  });

});

