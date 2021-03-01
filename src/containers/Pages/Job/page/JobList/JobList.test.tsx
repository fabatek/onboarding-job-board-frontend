import JobList from './JobList';
import {render} from "@testing-library/react";
import React from "react";
import jobApi from '../../../../../services/jobListApi';
import { Job } from '../../../../../types/JobInterface';

jest.mock('../../../../../services/jobListApi');
const mockedJobApi = jobApi as jest.Mocked<typeof jobApi>;

test('render JobList components and load API', () => {
    const mockedJobAmounts = 123;
    const mockedJobList: Job[] = [
        {
            id: "0",
            title: "Web Developer",
            description: "Make IT happen",
            company_name: "Faba",
            publication_date: "2021-02-23T20:55:01",
            salary: "140,000$",
            company_logo_url: "https://remotive.io/job/489595/logo",
            tags: []
        }
    ];

    mockedJobApi.getAllJob = jest.fn().mockResolvedValue({
        data: {
            'job-count': mockedJobAmounts,
            jobs: mockedJobList
        }
    });
    const { getByText } = render(
        <JobList 
            jobAmounts={mockedJobAmounts} 
            jobs={mockedJobList} />
    );
    const linkElement = getByText(/Web Developer/i);
    expect(linkElement).toBeInTheDocument();
});
  