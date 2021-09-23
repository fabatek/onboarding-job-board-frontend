import React from "react";
import Result, { Box } from "./Result";
import { Jobs } from '../Jobs';
import { render, screen } from "@testing-library/react";

it('render correctly when no jobs', () => {
    render(<Box 
        title=''
        company=''
        available={false}
        position=''
        location=''
        salary={0}/>)
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
    <Box 
        title='Looking for fresher ReactJs Developer'
        company='FabaTechnology'
        available={false}
        position='dev'
        location='Ho chi Minh City'
        salary={450}/>)
    const tree = screen.getByTestId('job_result')
    expect(tree).toMatchSnapshot()
})

test('should render result with content', () => {
    render(<Result/>);
    const resultElement = screen.getByTestId('job_result')
    expect(resultElement).toBeInTheDocument()
    expect(resultElement).toHaveTextContent('Branding')
    expect(resultElement).toHaveTextContent('is looking for')
    expect(resultElement).toHaveTextContent('Location:')
    expect(resultElement).toHaveBeenCalledTimes(1)
})