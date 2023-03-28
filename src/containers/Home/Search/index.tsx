import "./style.scss"
import {useState} from "react"
import { useSelector,useDispatch } from 'react-redux';
import { RootState } from '../../Redux/store/store';
import Job from '../../model/job';
import { searchAction } from "../../Redux/search/searchSlice";
function Search() {
    const { data: jobs } = useSelector((state: RootState) => state.jobs)
    const dispatch = useDispatch()
    const [title , setTitle] = useState("");
    const handleOnchange = (event : any) =>{
        const name = event.target.value
        setTitle(name) 
    }
    const handleSearch = (event : any) =>{
        dispatch(searchAction(title))
        event.preventDefault()
    }
    return (
        <div className='bg-dark text-light'>
            <div className='container'>
                <div className="container-fluid py-5 row">
                    <div className='col-2 search__selection'>
                        <select>
                            <option value={0}>All Cities</option>
                            {jobs?.map((job: Job, key) => {
                                return (<option key={key} value={job.city}>{job.city}</option>)
                            })}
                        </select>
                    </div>
                    <div className='col-10' data-testid='jobTest'>            
                        <form className="d-flex">
                            <input onChange={handleOnchange} className="form-control me-2" type="text" placeholder="Search" aria-label="Search" />
                            <button onClick={handleSearch} className="btn btn-danger" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Search;