import { fetchJobsLoading, fetchJobsSuccess, fetchJobsError } from '../action/actions'
import { Dispatch } from 'redux';
<<<<<<< HEAD
export function fetchJobs() {
    return (dispatch: Dispatch) => {
        dispatch(fetchJobsLoading());
        fetch('https://6176370c03178d00173daae3.mockapi.io/api/api')
            .then(res => res.json())
            .then(res => {
                if (res.error) {
                    throw (res.error);
                }
                dispatch(fetchJobsSuccess(res));
            })
            .catch(error => {
                dispatch(fetchJobsError(error));

            });

    }
}
=======
export function fetchJobs(){
    return (dispatch: Dispatch) => {
        dispatch(fetchJobsLoading());
        fetch('https://6176370c03178d00173daae3.mockapi.io/api/api')
        .then(res => res.json())
        .then(res => {
            if(res.error){
                throw(res.error);
            }
            dispatch(fetchJobsSuccess(res));
        })
        .catch(error => {
            dispatch(fetchJobsError(error));

        });
        
    }
}
export default fetchJobs;
>>>>>>> 7b44d4d19e513edb805d5a0e39bfa89ef55dde3d
