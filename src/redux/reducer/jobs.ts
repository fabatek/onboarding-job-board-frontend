import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { http } from "../../util/config";
import { DispatchType } from "../store/store";
import { Init, JobModal } from "../../type/type";
const initialState:Init = {
    allJobs: []
}
const jobReducer = createSlice({
    name: 'jobReducer',
    initialState,
    reducers:{
        allJobs: (state:Init,action:PayloadAction<JobModal[]>) => {
            state.allJobs = action.payload
        }
    }
})
export const {allJobs} = jobReducer.actions
export default jobReducer.reducer
export const getAllJobs = () => {
    return async (dispatch:DispatchType) => {
       try {
        const res = await http.get('/jobs')
        dispatch(allJobs(res.data))
       } catch (error) {
        console.log(error)
       }
    }
}