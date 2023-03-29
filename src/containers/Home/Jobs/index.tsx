import "./style.scss"
import { useEffect, useState } from 'react'
import ListJobs from './ListJobs';
import { getJobs } from "../../Redux/jobs/jobSlice";
import { useSelector, useDispatch } from "react-redux"
import { RootState } from "../../Redux/store/store";
import Loading from "../../components/Loading";
import Pagination from "./Pagination";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';

export default function Jobs() {
    const dispatch = useDispatch();
    const { data: jobs, loading } = useSelector((state: RootState) => state.jobs)
    const { search } = useSelector((state: RootState) => state.search)
    useEffect(() => {
        dispatch(getJobs());
    }, []);
    useEffect(() => {
        setCurrentPage(1)
    }, [search])

    const [currentPage, setCurrentPage] = useState(1);
    const jobsPerPage = 10;
    const indexOfLastPage = currentPage * jobsPerPage;
    const indexOfFirstPage = indexOfLastPage - jobsPerPage;

    const paginate = (indexPage: number) => {
        setCurrentPage(indexPage)
    }
    const handleClickPreviousPage = () => {
        setCurrentPage(currentPage - 1)
    }
    const handleClickNextPage = () => {
        setCurrentPage(currentPage + 1)
    }

    const searchJob = () => {
        return jobs.filter((searchJob) => {
            return searchJob.jobName.toLocaleLowerCase().includes(search.toLocaleLowerCase())
        })
    }
    const searchJobPage = searchJob().slice(indexOfFirstPage, indexOfLastPage)
    const totalSearchJob = searchJob()
    const lastSearchPage = Math.ceil(totalSearchJob.length / jobsPerPage)
    return (
        <div className='mt-4'>
            <h2 data-testid="jobTittle">{totalSearchJob.length} Jobs For "Chất" Developers</h2>
            {loading ? <Loading /> :
                <>
                    <ListJobs currentJobs={searchJobPage} />
                    <nav>
                        <ul className='pagination'>
                            <button className="btn btn-danger" disabled={currentPage === 1} onClick={handleClickPreviousPage}><FontAwesomeIcon icon={faArrowLeft} /></button>
                            <Pagination jobsPerPage={jobsPerPage} totalJobs={jobs.length} paginate={paginate} currentPage={currentPage} totalSearchJob={totalSearchJob.length} />
                            <button className="btn btn-danger" disabled={currentPage === lastSearchPage} onClick={handleClickNextPage}><FontAwesomeIcon icon={faArrowRight} /></button>
                        </ul>
                    </nav>
                </>
            }
        </div>
    )
}

