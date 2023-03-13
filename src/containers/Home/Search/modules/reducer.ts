import * as ActionType from "./constrant";

const initialState = {
    loading: false,
    data: null,
    error: null,
};

const jobReducer:any = (state = initialState, action:any) => {
    switch (action.type) {
        case ActionType.JOB_REQUEST:{
            state.loading = true;
            state.data = null;
            state.error = null
            return {...state};
        }
        case ActionType.JOB_SUCCESS:{
            state.loading = false;
            state.data = action.payload;
            state.error = null
            return {...state};
        }
        case ActionType.JOB_FAILED:{
            state.loading = false;
            state.data = null;
            state.error = action.payload   
            return {...state};
        }
        default: return {...state};
    }
};
const cityReducer:any = (state = initialState, action:any) => {
    switch (action.type) {
        case ActionType.CITY_REQUEST:{
            state.loading = true;
            state.data = null;
            state.error = null
            return {...state};
        }
        case ActionType.CITY_SUCCESS:{
            state.loading = false;
            state.data = action.payload;
            state.error = null
            return {...state};
        }
        case ActionType.CITY_FAILED:{
            state.loading = false;
            state.data = null;
            state.error = action.payload   
            return {...state};
        }
        default: return {...state};
    }
};
export {jobReducer,cityReducer};
