import {render, wait} from "@testing-library/react";
import React from "react";
import jobApi from '../../../../../services/jobListApi';
import { Job } from '../../../../../types/JobInterface';
import JobFeature from '../..';
import { Provider } from 'react-redux';
import {store } from '../../../../../store/store';

jest.mock('../../../../../services/jobListApi');
const mockedJobApi = jobApi as jest.Mocked<typeof jobApi>;

test('render JobList components and load API', async () => {
    const mockedJobAmounts = 1;
    const mockedJobList: Job[] = [
        {
            id: "0",
            title: "Web Developer",
            description: "Make IT happen",
            company_name: "Faba Technology",
            publication_date: "2021-02-23T20:55:01",
            salary: "140,000$",
        }
    ];

    mockedJobApi.getAllJob = jest.fn().mockResolvedValue({
        data: {
            'job-count': mockedJobAmounts,
            jobs: mockedJobList
        }
    });

    const { getByText } = render(
        <Provider store={store}>
            <JobFeature />
        </Provider>
    );
    
    await wait( async () => {
        const linkElement = getByText(/1 IT jobs are available/i);
        expect(linkElement).toBeInTheDocument();
    })
});