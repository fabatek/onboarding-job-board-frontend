import axios from "axios";

import { Job } from "../redux/types/jobsType";

export const getAPI = async (url: string ) => {
    const res = await axios.get<Job[]>(`${process.env.REACT_APP_API}/${url}`)
    return res;
}