import axios from 'axios'

//Create baseURL with axios mockAPI
export default axios.create({
    baseURL: "https://62346cbddebd056201e4b2c9.mockapi.io/api",
})