import axios from 'axios';

const axiosClient = axios.create({
  baseURL: 'https://remotive.io/api/remote-jobs',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default axiosClient;
