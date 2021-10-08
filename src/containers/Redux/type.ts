import rootReducer from "./Reducers";

export interface SystemJob {
  name: string;
  city: string;
  district: string;
  nation: string;
  dateWork: string;
  memberMin: Number;
  memberMax: Number;
  image: string;
}
export interface SystemState {
  data: SystemJob[]; //data to use filter and login
  jobs: SystemJob[]; //data jobs to display
  job: SystemJob;
  totalJobs: number;
}

export type typeStates = ReturnType<typeof rootReducer>;
