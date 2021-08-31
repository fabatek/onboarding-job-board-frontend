import axios from "axios";

const BASE_URL = "https://612c9ef7ab461c00178b5dda.mockapi.io/api/jobs";

const jobsAPI = {
  getAllJobs() {
    return axios.get(BASE_URL, {
      responseType: "json",
      headers: {
        "Content-Type": "application/json",
      },
    });
  },
};

export default jobsAPI;
