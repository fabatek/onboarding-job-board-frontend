import { render, fireEvent } from "@testing-library/react";
import Dashboard from "./Dashboard";
<<<<<<< HEAD
import { Provider } from 'react-redux';
import store from '../../store'
describe("Step form reandering", () => {
  it('it should render a step form`', () => {
    const { container } = render(<Provider store={store}><Dashboard /></Provider>);

=======
import {Provider} from 'react-redux';
import store from '../../store'
describe("Step form reandering", () => {
  it('it should render a step form`', () => {
    const {container} = render(<Provider store={store}><Dashboard /></Provider>);
    
>>>>>>> 7b44d4d19e513edb805d5a0e39bfa89ef55dde3d
    expect(container).toBeInTheDocument();
  });
});
describe('<Dashboard />', () => {
<<<<<<< HEAD
  it('when rendering success', () => {
    const { container } = render(<Provider store={store}><Dashboard /></Provider>);
    expect(container.querySelectorAll('.dashBoard').length).toBe(1);
  });
=======
    it('when rendering success', () => {
      const {container} = render(<Provider store={store}><Dashboard /></Provider>);
      expect(container.querySelectorAll('.dashBoard').length).toBe(1);
    });
>>>>>>> 7b44d4d19e513edb805d5a0e39bfa89ef55dde3d
});

//Search jobs
describe('Input value', () => {
  const { getByLabelText } = render(<Provider store={store}><Dashboard /></Provider>)
  const searchInput = getByLabelText('Search') as HTMLInputElement;
  it('updates on change', () => {
<<<<<<< HEAD
=======
    
>>>>>>> 7b44d4d19e513edb805d5a0e39bfa89ef55dde3d
    fireEvent.change(searchInput, { target: { value: 'test' } })
    expect(searchInput.value).toBe('test')
  })
<<<<<<< HEAD
=======
  
  it('value is null', () => {
>>>>>>> 7b44d4d19e513edb805d5a0e39bfa89ef55dde3d

  it('value is null', () => {
    fireEvent.change(searchInput, { target: { value: '' } })
    expect(searchInput.value).toBe('')
  })
})
