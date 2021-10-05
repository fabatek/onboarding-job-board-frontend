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
};
const reducer = (state = initialState, action: actionJobs): SystemState => {
  switch (action.type) {
    case "GET_JOBS":
      return { ...state, jobs: action.jobs };
    case "GET_DETAIL_JOBS":
      return { ...state, job: action.job };
    default:
      return state;
  }
};
export default reducer;
