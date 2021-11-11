
const initialState = {
    jobs: [],
    err: null,
    loading: false
}

interface Jobs {
    jobs: [],
    err: null,
    loading: boolean
}

export const jobsReducer = (state = initialState, action:any) =>{
    switch(action.type){
        case "FETCH_JOBS_REQUEST":
            return {
                ...state,
                loading: true
            }
        case "FETCH_JOBS_SUCCESS":
            return {
                ...state,
                jobs: action.payload,
                loading: false
            }
        case "FETCH_JOBS_ERROR":
            return {
                ...state,
                err: action.err
            }
        default: 
            return state;
    }
}