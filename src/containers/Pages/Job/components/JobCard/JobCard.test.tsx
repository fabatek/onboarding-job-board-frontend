import {render} from "@testing-library/react";
import React from "react";
import { Job } from "../../../../../types/JobInterface";
import JobCard from "./JobCard";

test('render JobCard components', () => {

    const mockedJob: Job = {
          id: "0",
          title: "Web Developer",
          description: "Make IT happen",
          company_name: "Faba",
          publication_date: "2021-02-23T20:55:01",
          salary: "140,000$",
          company_logo_url: "https://remotive.io/job/489595/logo",
          tags: []
    };

    const { getByText } = render( <JobCard  job={mockedJob}/> );

    const linkElement = getByText(/Make IT happen/i);
    expect(linkElement).toBeInTheDocument();
    
  });
  