import axios from "axios";



export const getAPI = async (url: string ) => {
    const res = await axios.get<[]>(`${process.env.REACT_APP_API}/${url}`)
    return res;
}