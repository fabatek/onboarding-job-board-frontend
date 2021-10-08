import { actionJobs } from "../Action";
import { SystemState } from "../type";

const initialState: SystemState = {
  data: [], //jobs origin
  jobs: [], //jobs display
  job: {
    name: "",
    city: "",
    district: "",
    nation: "",
    dateWork: "",
    memberMin: 0,
    memberMax: 0,
    image: "",
  },
  totalJobs: 0,
};
const reducer = (state = initialState, action: actionJobs): SystemState => {
  switch (action.type) {
    case "GET_JOBS":
      return {
        ...state,
        jobs: action.jobs,
        totalJobs: action.jobs.length,
        data: action.jobs,
      };
    case "GET_DETAIL_JOBS":
      return { ...state, job: action.job };
    case "SEARCH_TITLE_JOBS":
      const { key } = action;
      //handle filter by name
      const newJobs = state.data.filter((jobs) =>
        Object.values(jobs).some(
          (itemOfJob) =>
            typeof itemOfJob === "string" && itemOfJob.includes(String(key))
        )
      );
      //end filter
      return { ...state, jobs: [...newJobs] };
    default:
      return state;
  }
};
export default reducer;
