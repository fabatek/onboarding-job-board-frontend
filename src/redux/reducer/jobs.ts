import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { http } from "../../util/config";
import { JobInitReducer, JobModal } from "../../type/type";
import search from "../../util/search/search";
const initialState: JobInitReducer = {
  allJobs: [],
  loading:false,
  searchResults:[]
};
const jobReducer = createSlice({
  name: "jobReducer",
  initialState,
  reducers:{
    searchValueReducer:(state:JobInitReducer,action:PayloadAction<string>)=>{
        state.searchResults = search(state.allJobs, action.payload);
    }
},
  extraReducers: (builder) => {
    builder.addCase(getAllJobs.pending,(state:JobInitReducer)=>{
      state.loading = true
    })
    builder.addCase(
      getAllJobs.fulfilled,
      (state: JobInitReducer, action: PayloadAction<JobModal[]>) => {
        state.allJobs = action.payload;
        state.searchResults = action.payload
        state.loading = false
      }
    );
    builder.addCase(getAllJobs.rejected,(state:JobInitReducer)=> {
      state.loading = false;
    })
  },
});

export const {searchValueReducer} = jobReducer.actions
export default jobReducer.reducer;

export const getAllJobs = createAsyncThunk("getAllJob", async () => {
  try {
    const res = await http.get("/jobs");
    return res.data;
  } catch (error) {}
});
