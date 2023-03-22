import { useEffect } from 'react'
import "./style.scss"
import { useSelector, useDispatch } from 'react-redux';
import { getJobs } from '../../Redux/jobs/jobSlice';
import { RootState } from '../../Redux/store/store';
import Job from '../../model/job';
function Search() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getJobs());
    }, []);
    const { data: jobs } = useSelector((state: RootState) => state.jobs)
    return (
        <div className='bg-dark text-light'>
            <div className='container'>
                <div className="container-fluid py-5 row">
                    <div className='col-2 search-selection'>
                        <select>
                            <option value={0}>All Cities</option>
                            {jobs?.map((item: Job, key) => {
                                return (<option key={key} value={item.city}>{item.city}</option>)
                            })}
                        </select>
                    </div>
                    <div className='col-10' data-testid='jobTest'>
                        <h2 className='total-job'>{jobs?.length} IT Jobs For "Chất" Developers</h2>
                        <form className="d-flex">
                            <input className="form-control me-2" type="text" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-danger" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Search;