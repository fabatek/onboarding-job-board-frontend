import React from "react";
import Result, { Box } from "./Result";
import { Jobs } from '../Jobs';
import { render, screen } from "@testing-library/react";

it('render correctly when no jobs', () => {
    const fakeJobs:Jobs[] = []
    render(<Box job={fakeJobs[0]}/>)
    const tree = screen.getByTestId('job_result')
    expect(tree).toMatchSnapshot()
    expect(tree).toHaveTextContent('No Jobs Found')
})

it('render correctly when there are some jobs', () => {
    const fakeJobs:Jobs[] = [
        {
            id: 1,
            Available: true,
            JobName: 'dev',
            Company: 'FabaTechnology',
            Tags: 'IT, Front-end',
            jobType: 'full-time',
            Location: 'Ho chi Minh City',
            Salary: 450,
            Title: 'Looking for fresher ReactJs Developer'
        },
        {
            id: 2,
            Available: false,
            JobName: 'dev',
            Company: 'FabaTechnology',
            Tags: 'IT, Front-end',
            jobType: 'full-time',
            Location: 'Ho chi Minh City',
            Salary: 450,
            Title: 'Looking for fresher ReactJs Developer'
        }
    ]
    render(
    <Box job={fakeJobs[1]}/>)
    const tree = screen.getByTestId('job_result')
    expect(tree).toMatchSnapshot()
    expect(tree).toHaveTextContent('FabaTechnology')
    expect(tree).toHaveTextContent('dev')
    expect(tree).toHaveTextContent('Ho Chi Minh city')
    expect(tree).toHaveTextContent('Looing for fresher ReactJs Developert')
})

test('should render result with content', () => {
    render(<Result/>);
    const resultElement = screen.getByTestId('job_result')
    expect(resultElement).toBeInTheDocument()
    expect(resultElement).toHaveTextContent('is looking for')
    expect(resultElement).toHaveTextContent('Location:')
    expect(resultElement).toHaveBeenCalledTimes(1)
})