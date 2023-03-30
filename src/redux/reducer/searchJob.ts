import {PayloadAction, createSlice} from '@reduxjs/toolkit'
import { SearchJobModal } from '../../type/type'

const initialState:SearchJobModal = {
    searchValue:''
}

const searchJob = createSlice({
    name:'searchJob',
    initialState,
    reducers:{
        searchValueReducer:(state:SearchJobModal,action:PayloadAction<string>)=>{
            state.searchValue = action.payload
        }
    },
})

export const {searchValueReducer} = searchJob.actions
export default searchJob.reducer