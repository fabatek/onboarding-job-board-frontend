import { ActionTypes } from "../contants/action-type";

//Create initialState
export const initialState = {
    jobs: {
        name: String,
        description: String,
        address: String,
        company: String,
        image: String,
        hot: Boolean,
        status: Boolean,
    },
};

//Create JobReducer Process State & Payload
export const jobReducer = (state: any = initialState,{ type, payload }: any) => 
{
    switch (type) {
        case ActionTypes.SET_JOBS:
        return { ...state, jobs: payload };
        case ActionTypes.FETCH_JOBS:
        return { ...state, jobs: payload };
        default:
        return state;
    }
};
