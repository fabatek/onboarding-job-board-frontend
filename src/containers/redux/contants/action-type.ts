// Create ActionTypes
export const ActionTypes = {
  FETCH_JOBS: "FETCH_JOBS",
};

export type JobType = {
  id: number;
  name: string;
  description: string;
  address: string;
  company: string;
  image: string;
  status: boolean;
};
