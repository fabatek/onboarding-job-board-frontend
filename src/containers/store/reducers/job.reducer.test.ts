import Job from "../../models/jobModel";
import ActionTypes from "../actions/action-types";
import { jobReducer } from "./job.reducer";

const jobs: Job[] = [
  {
    title: "model",
    image: "http://placeimg.com/64/480/transport",
    description: "Human",
    is_hot: true,
    city: "New Madgeville",
    salary: "338.00",
    create_at: "2021-02-14T08:06:34.850Z",
    update_at: "2022-06-16T06:07:03.795Z",
    id: "1",
  },
  {
    title: "model",
    image: "http://placeimg.com/64/480/transport",
    description: "Human",
    is_hot: true,
    city: "New Madgeville",
    salary: "338.00",
    create_at: "2021-02-14T08:06:34.850Z",
    update_at: "2022-06-16T06:07:03.795Z",
    id: "2",
  },
];

interface JobState {
  total: number;
  page: number;
  totalPage: number;
  perPage: number;
  jobs: Job[] | null;
  isLoading: boolean;
}
const initialState = {
  total: 0,
  page: 0,
  totalPage: 0,
  perPage: 10,
  jobs: null,
  isLoading: false,
};
describe("Jobs reducer tests", () => {
  it("should handle GET_JOBS", () => {
    expect(
      jobReducer(initialState, {
        type: ActionTypes.GET_JOBS_REQUEST,
      })
    ).toEqual({
      total: 0,
      page: 0,
      totalPage: 0,
      perPage: 10,
      jobs: null,
      isLoading: true,
    });
  });

  it("should handle GET_JOB_SUCCESS", () => {
    expect(
      jobReducer(initialState, {
        type: ActionTypes.GET_JOBS_SUCCESS,
        payload: jobs
      })
    ).toEqual({
      total: 2,
      page: 0,
      totalPage: 1,
      perPage: 10,
      jobs: jobs,
      isLoading: false,
    });
  });

});
