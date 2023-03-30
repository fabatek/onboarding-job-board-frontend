import { createAction, createReducer} from "@reduxjs/toolkit";
export const searchAction = createAction <Search> ("searchJob")
interface Search {
    title: string;
    city: string;
}
interface searchState {
    search : Search
}
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