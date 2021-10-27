import axios from "axios";
export const getAPI = async () => {
    const res = await axios.get<[]>(`https://6176370c03178d00173daae3.mockapi.io/api/api`)
    return res;
}