import { SystemJob } from "../type";

export interface requestJobsType {
  type: "REQUEST_JOBS";
}
export interface getJobsType {
  type: "GET_JOBS";
  jobs: SystemJob[];
}
export interface requestJobType {
  type: "REQUEST_DETAIL_JOBS";
  id: number;
}
export interface getJobType {
  type: "GET_DETAIL_JOBS";
  job: SystemJob;
}
