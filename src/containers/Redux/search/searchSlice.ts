import { createAction, createReducer} from "@reduxjs/toolkit";
import { Search } from "../../model/job";
import { searchState } from "../type";
export const searchAction = createAction <Search> ("searchJob")
const initialState = {
    search: {
        title:"",
        city:"All"
    },
} as searchState
export const searchSlice = createReducer(initialState, builder=>{
    builder.addCase(searchAction,(state,action)=>{
        state.search = action.payload
    })
})
export default searchSlice;