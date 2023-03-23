import Job from "../model/job";
interface JobState {
  loading: boolean;
  data: Job[];
  error: string;
}

export default JobState;
