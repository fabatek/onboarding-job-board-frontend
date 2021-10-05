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
  jobs: SystemJob[];
  job: SystemJob;
}

export type typeStates = ReturnType<typeof rootReducer>;
