import axiosClient from './axiosClient';

const jobListApi = {

    getAllJob(params: any) {
        const url = "/remote-jobs";
        return axiosClient(url, {params});
    },
    getJob(id: string) {

    }
}
export default jobListApi;