import {render} from "@testing-library/react";
import React from "react";
import { Job } from "../../../../../types/JobInterface";
import JobCard from "./JobCard";

test('render JobCard components', () => {

    const mockedJobList: Job = {
          id: "0",
          title: "Web Developer",
          description: "Make IT happen",
          company_name: "Faba Technology",
          publication_date: "2021-02-23T20:55:01",
          salary: "140,000$",
      }
    const { getByText } = render( <JobCard job={mockedJobList}/> );

    const linkElement = getByText(/Salary/i);
    expect(linkElement).toBeInTheDocument();
    
  });
  