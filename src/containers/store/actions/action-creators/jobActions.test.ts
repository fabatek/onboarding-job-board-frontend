import thunk, { ThunkDispatch } from "redux-thunk";
import configureMockStore from "redux-mock-store";
import MockAdapter from "axios-mock-adapter";
import axios from "axios";
import { RootState } from "../..";
import { Action } from "../job.action";
import Job from "../../../models/jobModel";
import ActionTypes from "../action-types";
import { getJobs } from "./jobActions";

const axiosMock = new MockAdapter(axios);
const middlewares = [thunk];
type DispatchExts = ThunkDispatch<RootState, void, Action>;
const mockStore = configureMockStore<RootState, DispatchExts>(middlewares);

describe("fetch jobs action", () => {
  afterEach(() => {
    axiosMock.reset();
  });
  const numberPage: number = 1;
  const perPage: number = 10;
  it("should fire GET_JOBS_REQUEST and GET_JOBS_SUCCESSS in case of success", () => {
    const data: Job[] = [
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
    const jobsPage:Job[] = [
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
    ]

    axiosMock
      .onGet("https://618b9928ded7fb0017bb90d0.mockapi.io/api/v1/jobs/jobs")
      .reply(200, { response: data })
      .onGet(
        `https://618b9928ded7fb0017bb90d0.mockapi.io/api/v1/jobs/jobs?page=${numberPage}&limit=${perPage}`
      )
      .reply(200, { jobsPage });
    const expectedActions = [
      { type: ActionTypes.GET_JOBS_REQUEST },
      {
        type: ActionTypes.GET_JOBS_SUCCESS,
        payload: {
          jobs: data,
          jobsPage: jobsPage,
          page: numberPage,
        },
      },
    ];

    const store = mockStore();
    store.dispatch(getJobs(perPage,numberPage)).then(() => {
      store.getActions();
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
  it("should fire GET_JOBS_REQUEST and GET_JOBS_FAIL in case of an error", () => {

    axiosMock
      .onGet("https://618b9928ded7fb0017bb90d0.mockapi.io/api/v1/jobs/jobs")
      .networkError()
      .onGet(
        `https://618b9928ded7fb0017bb90d0.mockapi.io/api/v1/jobs/jobs?page=${numberPage}&limit=${perPage}`
      ).networkError()
    const store = mockStore();
    store
      .dispatch(getJobs(numberPage, perPage))
      .then(() => {})
      .catch((error) => {
        const expectedActions = [
          { type: ActionTypes.GET_JOBS_REQUEST },
          {
            type: ActionTypes.GET_JOBS_FAIL,
            payload: error.toString(),
          },
        ];
        store.getActions();

        expect(store.getActions()).toEqual(expectedActions);
      });
  });
});
