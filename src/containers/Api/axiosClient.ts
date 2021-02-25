import axios from 'axios';


const axiosClient = axios.create({
    baseURL: 'https://remotive.io/api/',
    responseType: 'json',
    headers: {
        'Content-Type': 'application/json'
    }
});
export default axiosClient;