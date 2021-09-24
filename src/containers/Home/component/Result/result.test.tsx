import React from "react";
import Result, { Box } from "./Result";
import { Job } from '../Jobs';
import { render, screen } from "@testing-library/react";
import { shallow } from 'enzyme'

it('render correctly when no jobs', () => {
    const fakeJobs:Job[] = []
    render(<Box job={fakeJobs[0]}/>)
    const tree = screen.getByTestId('job_result')
    expect(tree).toMatchSnapshot()
    expect(tree).toHaveTextContent('No Jobs Found')
})

it('render correctly when there are some jobs', () => {
    const fakeJobs:Job[] = [
        {
            id: 1,
            available: true,
            jobName: 'dev',
            company: 'FabaTechnology',
            tags: 'IT, Front-end',
            jobType: 'full-time',
            location: 'Ho chi Minh City',
            salary: 450,
            title: 'Looking for fresher ReactJs Developer'
        },
        {
            id: 2,
            available: false,
            jobName: 'dev',
            company: 'FabaTechnology',
            tags: 'IT, Front-end',
            jobType: 'full-time',
            location: 'Ho chi Minh City',
            salary: 450,
            title: 'Looking for fresher ReactJs Developer'
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

describe('pagination', () => {
    it('start with page 1', () => {
        const wrapper = shallow(<Result/>);
        const text = wrapper.find('button.result__pagination__btn:nth-child(2)').text()
        expect(text).toEqual(1)
    });
    it('Is page 1 active', () => {
        const wrapper = shallow(<Result/>);
        const text = wrapper.find('button.result__pagination__btn:nth-child(2)')
        expect(text.is('result__pagination__btn--active')).toBe(true)
    })
    it('increased and decreased current page by 1 when clicking next', () => {
        const wrapper = shallow(<Result/>);
        const increasedPageBtn = wrapper.find('button.result__pagination__btn:last-child')
        const decreasedPageBtn = wrapper.find('button.result__pagination__btn:first-child')
        increasedPageBtn.simulate('click')
        const page = wrapper.state('currentPage')
        expect(page).toEqual(2)
        decreasedPageBtn.simulate('click')
        expect(page).toEqual(1)
    });
    it('is prev btn disable when in page 1', () => {
        const wrapper = shallow(<Result/>)
        const text = wrapper.find('button.result__pagination__btn:first-child')
        expect(text.is('result__pagination__btn--disable')).toBe(true)
    })
})