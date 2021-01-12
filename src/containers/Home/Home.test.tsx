import { render, wait } from "@testing-library/react";
import Home from "../Home";
import React from "react";
import {Provider} from 'react-redux';
import store from '../../store';
import axios from 'axios';

test('render Home Page', () => {
        const { getByText } = render(<Provider store={store}><Home /></Provider>);
    const element = getByText(/0 IT jobs are available/i);

  expect(element).toBeInTheDocument();
});

jest.mock('axios')

test('fetch job count', async () => {

    const res = {
        loading: false,
        jobs: [],
        'job-count': 1496
    }
    axios.get = jest.fn().mockResolvedValue({data: res});


    const { findByText } = render(<Provider store={store}><Home /></Provider>);

    const element = await findByText(/1496 IT jobs are available/i);
    await wait(() => {
        expect(element).toBeInTheDocument();
    })
});
