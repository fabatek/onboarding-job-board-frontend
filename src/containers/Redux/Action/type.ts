import { SystemJob } from "../type";

export interface getJobsType {
  type: "GET_JOBS";
  jobs: SystemJob[];
}

export interface getJobType {
  type: "GET_JOB";
  job: SystemJob;
}
export interface searchJob {
  type: "SEARCH_TITLE_JOBS";
  key: String;
}
