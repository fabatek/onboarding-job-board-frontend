import renderer from "react-test-renderer";
import React from "react";
import Result from "./Result";
import { Jobs } from '../Jobs'

it('render correctly when no jobs', () => {
    const fakeJobs:Jobs[] = []
    const tree = renderer.create(<Result totalJobs={fakeJobs}/>).toJSON()
    expect(tree).toMatchSnapshot()
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
    const tree = renderer.create(<Result totalJobs={fakeJobs}/>).toJSON()
    expect(tree).toMatchSnapshot()
})