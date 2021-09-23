import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { Jobs } from '../Home/component/Jobs';
import axios from 'axios';

type initialStateType = {
    totalJobList: Jobs[];
    status: string;
};

const totalJobList: Jobs[] = [];

const initialState: initialStateType = {
    totalJobList,
    status:'idle',
};

export const fetchJobList = createAsyncThunk(
    "team/playerListLoading",
    (URL:string) =>
      axios
        .get(URL)
        .then((response) => response.data)
        .catch((error) => error)
  );

export const jobSlices = createSlice({
    name: 'job',
    initialState: initialState,
    reducers: {},
    extraReducers: {
        [fetchJobList.pending.type]: (state, action) => {
            state.totalJobList = [];
            state.status = 'loading'
        },
        [fetchJobList.fulfilled.type]: (state, action) => {
            state.totalJobList = action.payload;
            state.status = 'idle'
        },
        [fetchJobList.rejected.type]: (state, action) => {
            state.totalJobList = [];
            state.status = 'loading'
        }
    }
});

export default jobSlices;