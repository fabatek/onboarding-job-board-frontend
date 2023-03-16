import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { http } from "../../util/config";
import { JobInitReducer, JobModal } from "../../type/type";
const initialState: JobInitReducer = {
  allJobs: [],
};
const jobReducer = createSlice({
  name: "jobReducer",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      getAllJobs.fulfilled,
      (state: JobInitReducer, action: PayloadAction<JobModal[]>) => {
        state.allJobs = action.payload;
      }
    );
  },
});
export default jobReducer.reducer;
export const getAllJobs = createAsyncThunk("gẹtAllJob", async () => {
  try {
    const res = await http.get("/jobs");
    return res.data;
  } catch (error) {}
});
