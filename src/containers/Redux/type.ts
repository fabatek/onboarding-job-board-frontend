import {Job} from "../model/job";
import { Search } from "../model/job";

export interface JobState {
  loading: boolean;
  data: Job[];
  error: string;
}
export interface JobDetailState {
  loading: boolean;
  data: Job;
  error: string;
}
export interface searchState {
  search : Search
}
