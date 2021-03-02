import axios from 'axios';

const axiosClient = axios.create({
  baseURL:
    //
    'https://cors-anywhere.herokuapp.com/https://remotive.io/api/remote-jobs',
});

export default axiosClient;
