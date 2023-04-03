import { createSlice, PayloadAction,createAsyncThunk } from "@reduxjs/toolkit";
import { JobDetailState } from "../type";
import api from "../../util/util";
import { Job } from "../../model/job";

const initialState = {
  loading: false,
  data: {
    jobName:"",
    decs: "",
    city: "",
    tech:"",
    img:"",
    id: ""
  },
  error: "",
} as JobDetailState;

export const getJobDetail = createAsyncThunk<Job, string>(
  "jobDetail/getJobDetail",
  async (id, thunkApi) => {
    try {
      const data = await api.get(`/products/${id}`);
      return data.data;
    } catch (err: any) {
      return thunkApi.rejectWithValue(err.message);
    }
  }
);

const jobDetailSlice = createSlice({
  name: "jobDetail",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getJobDetail.pending, (state) => {
        state.loading = true;
      })
      .addCase(
        getJobDetail.fulfilled,
        (state, action: PayloadAction<Job>) => {
          state.loading = false;
          state.data = action.payload;
        }
      )
      .addCase(getJobDetail.rejected, (state, action: PayloadAction<any>) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default jobDetailSlice.reducer;
