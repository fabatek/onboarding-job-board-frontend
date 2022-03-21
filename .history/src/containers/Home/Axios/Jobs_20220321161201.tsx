import axios from "axios";

export const getJobs = async () => {
    axios.get(`https://6238236700ed1dbc5aaedc08.mockapi.io/api/jobs`)
      .then(res => {
       return res.data.count;
    })
}