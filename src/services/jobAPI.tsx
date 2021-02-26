import axiosClient from './axiosClient';

const jobAPI = {
  getAll(params?: any) {
    const url = '';
    return axiosClient.get(url, { params });
  },
};

export default jobAPI;
