import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import {Job} from "../../model/job";
import api from "../../util/util";
import {JobState} from "../type";

export const getJobs = createAsyncThunk<Job[]>(
  "jobs/getJobs",
  async (data, thunkApi) => {
    try {
      const data = await api.get("/products/");
      return data.data;
    } catch (err:any) {
      return thunkApi.rejectWithValue(err.message);
    }
  }
);

const initialState = {
  loading: false,
  data: [],
  error: "",
} as JobState;
const jobSlice = createSlice({
  name: "job",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getJobs.pending, (state) => {
        state.loading = true;
      })
      .addCase(getJobs.fulfilled, (state, action: PayloadAction<Job[]>) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(getJobs.rejected, (state, action: PayloadAction<any>) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});
export default jobSlice.reducer;
