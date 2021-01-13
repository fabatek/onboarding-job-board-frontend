import { render, wait, fireEvent } from "@testing-library/react";
import Home from "../Home";
import JobList from '../../components/JobList';
import JobItem from '../../components/JobItem';
import React from "react";
import {Provider} from 'react-redux';
import store from '../../store';
import axios from 'axios';
import { Job } from "../../types/Job";
import Pagination from "../../components/Pagination";

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

test('render JobList Component', async () => {
    const { findByText } = render(<JobList jobs={[]} firstItem={0} lastItem={99} />);
    const element = await findByText(/Job list/i);

    await wait(() => {
        expect(element).toBeInTheDocument();
    })
});

test('render JobItem Component', async () => {
    const job: Job = {
        id: 392516,
        title: 'Independent Sales Representative',
        candidate_required_location: 'USA Only',
        category: 'Sales',
        company_name: 'The Juno Group, Inc.',
        description: 'Description',
        publication_date: '2021-01-12T09:40:01',
        salary: ''
    }
    const { findByText } = render(<JobItem job={job} />);
    const element = await findByText(/Independent Sales Representative/i);

    await wait(() => {
        expect(element).toBeInTheDocument();
    })
});


test('render Pagination Component', async () => {
    const onClickPagination = (pageNumber: number) => {
        return pageNumber
    }
    const { findByText } = render(<Pagination totalItem={20} currentPage={1} itemsPerPage={10} onClickPagination={() => onClickPagination(1)} />);
    const element = await findByText('1');

    await wait(() => {
        expect(element).toBeInTheDocument();
    })
});

test('click event Pagination', async () => {
    const onClickPagination = (pageNumber: number) => {
        return pageNumber
    }
    
    const { findByText } = render(<Pagination totalItem={20} currentPage={1} itemsPerPage={10} onClickPagination={() => onClickPagination(1)} />);
    const element = await findByText('1');

    await wait(() => {
        fireEvent.click(element);
    })
});