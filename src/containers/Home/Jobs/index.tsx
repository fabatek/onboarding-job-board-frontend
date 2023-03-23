import "./style.scss"
import { useEffect, useState } from 'react'
import ListJob from './ListJob';
import { getJobs } from "../../Redux/jobs/jobSlice";
import { useSelector, useDispatch } from "react-redux"
import { RootState } from "../../Redux/store/store";
import Loading from "../../components/Loading";
import Pagination from "./Pagination";
export default function Jobs() {
    const dispatch = useDispatch();
    const { data: jobs, loading } = useSelector((state: RootState) => state.jobs)
    useEffect(() => {
        dispatch(getJobs());
    }, []);
    const [currentPage, setCurrentPage] = useState(1);
    const jobsPerPage = 10;

    const indexOfLastPage = currentPage * jobsPerPage;
    const indexOfFirstPage = indexOfLastPage - jobsPerPage;
    const currentJobs = jobs.slice(indexOfFirstPage, indexOfLastPage);

    const paginate = (indexPage: number) => {
        setCurrentPage(indexPage)
    }
    return (
        <div className='mt-4'>
            <h2 data-testid="jobTittle">{jobs.length} Jobs For "Chất" Developers</h2>
            {loading ? <Loading /> :
                <>
                    <ul className='container-fluid mb-2' id='listJobs'>
                        <ListJob currentJobs={currentJobs} />
                    </ul>
                    <nav>
                        <ul className='pagination'>
                            <Pagination jobsPerPage={jobsPerPage} totalJobs={jobs.length} paginate={paginate} />
                        </ul>
                    </nav>
                </>
            }
        </div>
    )
}

