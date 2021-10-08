import { actionJobs } from "../Action";
import { SystemState } from "../type";

const initialState: SystemState = {
  jobs: [],
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
      return { ...state, jobs: action.jobs, totalJobs: action.jobs.length };
    case "GET_DETAIL_JOBS":
      return { ...state, job: action.job };
    case "SEARCH_TITLE_JOBS":
      const { key } = action;
      const newJobs = state.jobs.filter((jobs) =>
        Object.values(jobs).some(
          (item) => typeof item === "string" && item.includes(String(key))
        )
      );
      console.log(newJobs, "newJobs");
      return { ...state, jobs: [...newJobs] };
    default:
      return state;
  }
};
export default reducer;
