import { render } from '@testing-library/react';
import Home from '../Home';
import { Provider } from 'react-redux';
import store from '../../store';
import JobList from '../../components/jobList/JobList';
import axios from 'axios';
import { BASE_URL } from '../../actions/JobsAction';

describe('Should test components', () => {
  it('Should test home page', () => {
    const { container } = render(
      <Provider store={store}>
        <Home />
      </Provider>
    );
    expect(container).toBeInTheDocument();
  });
  it('Should test JobList Component', () => {
    const { getByText } = render(
      <Provider store={store}>
        <JobList />
      </Provider>
    );
    expect(getByText('Loading...')).toBeInTheDocument();
  });
});

describe('Should test get data API', () => {
  it('Get all data API request successfully', async () => {
    const result = await axios.get(BASE_URL);
    expect(result.data.length).toBe(100);
  });

  it('get data API with endpoint request successfully', async () => {
    const itemSearch: string = 'name 100';
    const result = await axios.get(`${BASE_URL}?name=${itemSearch}`);
    expect(result.data[0].name === 'name 100').toBe(true);
  });
});
