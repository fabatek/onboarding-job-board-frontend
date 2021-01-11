
import axios from "axios";
const ApiService = {
 
 get(url = "") {
   return axios.get(url);
 }
};
 
export default ApiService;
 
export const JobService = {
 getJobs(url = "") {
   return ApiService.get(url);
 }
};
 