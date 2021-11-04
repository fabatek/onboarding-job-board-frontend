import { render, fireEvent } from "@testing-library/react";
import Dashboard from "./Dashboard";
import { Provider } from 'react-redux';
import store from '../../store'
describe("Step form reandering", () => {
  it('it should render a step form`', () => {
    const { container } = render(<Provider store={store}><Dashboard /></Provider>);

    expect(container).toBeInTheDocument();
  });
});
describe('<Dashboard />', () => {
  it('when rendering success', () => {
    const { container } = render(<Provider store={store}><Dashboard /></Provider>);
    expect(container.querySelectorAll('.dashBoard').length).toBe(1);
  });
});

//Search jobs
describe('Input value', () => {
  const { getByLabelText } = render(<Provider store={store}><Dashboard /></Provider>)
  const searchInput = getByLabelText('Search') as HTMLInputElement;
  it('updates on change', () => {
    fireEvent.change(searchInput, { target: { value: 'test' } })
    expect(searchInput.value).toBe('test')
  })

  it('value is null', () => {
    fireEvent.change(searchInput, { target: { value: '' } })
    expect(searchInput.value).toBe('')
  })
})