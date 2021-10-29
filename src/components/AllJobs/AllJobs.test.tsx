import {render,screen} from "@testing-library/react";
import AllJobs from "./AllJobs";
import React from "react";
export interface jobs {
  jobName: string;
  jobType: string;
  jobArea: string;
  jobImg: string;
  jobCompany: string;
  id: string;
}[]
const jobs = [
  {
    jobName: "Dynamic Integration Planner",
    jobType: "Architect",
    jobArea: "New Jeffry",
    jobImg: "http://placeimg.com/640/480/animals",
    jobCompany: "Cassin LLC",
    id: "1"
  },
  {
    jobName: "Direct Applications Producer",
    jobType: "Associate",
    jobArea: "New Kristinamouth",
    jobImg: "http://placeimg.com/640/480/nightlife",
    jobCompany: "O'Reilly - Rolfson",
    id: "2"
  },
  {
    jobName: "Principal Research Designer",
    jobType: "Executive",
    jobArea: "South Emelie",
    jobImg: "http://placeimg.com/640/480/people",
    jobCompany: "Jacobson Group",
    id: "3"
  },
  {
    jobName: "Corporate Accounts Consultant",
    jobType: "Assistant",
    jobArea: "Terre Haute",
    jobImg: "http://placeimg.com/640/480/animals",
    jobCompany: "Mertz LLC",
    id: "4"
  },
  {
    jobName: "Customer Brand Producer",
    jobType: "Orchestrator",
    jobArea: "Miramar",
    jobImg: "http://placeimg.com/640/480/fashion",
    jobCompany: "Sipes, Fahey and Koss",
    id: "5"
  }
]
describe("Step form reandering", () => {
  it('it should render a step form`', () => {
    const {container} = render(<AllJobs />);
    
    expect(container).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });
});

describe("Display jobs test", () => {
  it('renders an `.jobscard`', () => {
    const {container} = render(<AllJobs  />);
    expect(container.querySelectorAll('.allJobs').length).toBe(1);
  });
  
});
