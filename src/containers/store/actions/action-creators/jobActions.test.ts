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

    axiosMock
      .onGet("https://618b9928ded7fb0017bb90d0.mockapi.io/api/v1/jobs/jobs")
      .reply(200, { response: data });

    const expectedActions = [
      { type: ActionTypes.GET_JOBS_REQUEST },
      {
        type: ActionTypes.GET_JOBS_SUCCESS,
        payload: data,
      },
    ];

    const store = mockStore();
    store.dispatch(getJobs()).then(() => {
      store.getActions();
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
  it("should fire GET_JOBS_REQUEST and GET_JOBS_FAIL in case of an error", () => {
    axiosMock
      .onGet("https://618b9928ded7fb0017bb90d0.mockapi.io/api/v1/jobs/jobs")
      .networkError();

    const store = mockStore();
    store
      .dispatch(getJobs())
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
