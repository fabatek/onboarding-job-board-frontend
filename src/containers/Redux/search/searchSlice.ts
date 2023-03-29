import { createAction, createReducer} from "@reduxjs/toolkit";
export const searchAction = createAction <String> ("searchJob")
interface searchState {
    search : String
}
const initialState = {
    search: "",
} as searchState
export const searchSlice = createReducer(initialState, builder=>{
    builder.addCase(searchAction,(state,action)=>{
        state.search = action.payload
    })
})
export default searchSlice;