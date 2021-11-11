import React, { useEffect, FC } from 'react'
import './Dashboard.scss'
import { Dropdown, Form } from 'react-bootstrap';
import ReactPaginate from 'react-paginate';
<<<<<<< HEAD
import { useSelector, useDispatch } from 'react-redux';
import { fetchJobs } from '../../data/api'
import { Job } from '../../types/jobsType';
import { search, setOffset } from '../../action/actions';
import { RootState } from '../../reducer/reducer';
const Dashboard: FC = () => {
    const jobs = useSelector((state: RootState) => state.jobs);
    const pagecount = useSelector((state: RootState) => state.pagecount);
    const allJobs = useSelector((state: RootState) => state.allJobs);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchJobs())
    }, [dispatch]);

    const changePage = ({ selected }: any) => {
        dispatch(setOffset(selected));
        window.scrollTo(0, 0);//scroll to top
    }

    return (
        <div className="dashBoard">
            <h1>Có tất cả {allJobs?.length} IT Jobs For Chất Developers</h1>
            <div className='search'>
                <div className="search__form">

                    <Form.Control aria-label='Search' type="text" placeholder="Search..." onChange={(e) => { dispatch(search(e.target.value)) }} />
=======
import { JobTotal } from '../TotalJobs/Job';
import { useSelector, useDispatch } from 'react-redux';
import {fetchJobs} from '../../data/api'
interface RootState {
    Job: [],
    loading: boolean,
    error: null
  }
const Dashboard : FC = () => {
    const [pageNumber, setPageNumber] = useState(0);
    const jobsPerPage = 10; 
    const pagesVisited = pageNumber * jobsPerPage;
    const [searchTerm,setSearchTerm ] = useState("");
    const jobs = useSelector((state: RootState) => state.Job.slice(0, 100));
    const dispatch = useDispatch()
     useEffect(() => {
        dispatch(fetchJobs())
        }, [dispatch])
        
    //Pagination
    const pageCount = Math.ceil(jobs.length / jobsPerPage);
    const changePage = ( {selected}:any ) => {
            setPageNumber(selected);
        };
    
    return (
        <div className="dashBoard">
            <JobTotal/>
            <div className='search'>
                <div className="search__form">
                    
                    <Form.Control aria-label='Search' type="text" placeholder="Search..." onChange={(e)=>{ setSearchTerm(e.target.value)}} />
                    
>>>>>>> 7b44d4d19e513edb805d5a0e39bfa89ef55dde3d
                    <Dropdown>
                        <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                            City
                        </Dropdown.Toggle>
<<<<<<< HEAD
=======

>>>>>>> 7b44d4d19e513edb805d5a0e39bfa89ef55dde3d
                        <Dropdown.Menu>
                            <Dropdown.Item href="#/action-1">Ha Noi</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Ho Chi Minh</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Da Nang</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </div>
            </div>
<<<<<<< HEAD
            {jobs?.map((jobVal: Job) => (
                <div key={jobVal.id} className="jobsCard">
                    <div className="jobsCard__left">
                        <img src={jobVal.jobImg} alt="image job" />
                    </div>
                    <div className="jobsCard__center">
                        <p className="name">{jobVal.jobName}</p>
                        <p className="company">{jobVal.jobCompany}</p>
                        <p className="type">{jobVal.jobType}</p>
                    </div>
                    <div className="jobsCard__right">
                        <p>{jobVal.jobArea}</p>
                    </div>
                </div>
            ))}
            <ReactPaginate
                previousLabel={"Previous"}
                nextLabel={"Next"}
                pageCount={pagecount}
                onPageChange={changePage}
                containerClassName={"paginationBttns"}
                previousLinkClassName={"previousBttn"}
                nextLinkClassName={"nextBttn"}
                disabledClassName={"paginationDisabled"}
                activeClassName={"paginationActive"}
                pageRangeDisplayed={10} marginPagesDisplayed={1}
            />
        </div>
=======
                {jobs.filter((val:any)=>{
                    if(searchTerm===""){
                        return val;
                    } else if(
                        val.jobName.toLowerCase().includes(searchTerm.toLowerCase()) 
                    ){
                        return val;
                    }
                    
                    })
                    .slice(pagesVisited, pagesVisited + jobsPerPage)
                    .map((jobs:any) => {
                        return (
                            <div key={jobs.id} className="jobsCard">
                                <div className="jobsCard__left">
                                    <img src={jobs.jobImg} alt="" />
                                </div>
                                <div className="jobsCard__center">
                                    <a href="" className="name">{jobs.jobName}</a>
                                    <a href="" className="company">{jobs.jobCompany}</a>
                                    <a href="" className="type">{jobs.jobType}</a>
                                </div>
                                <div className="jobsCard__right">
                                    <p>{jobs.jobArea}</p>
                                </div>
                                
                            </div>

                        );
                    })}
                    <ReactPaginate 
                    previousLabel={"Previous"}
                    nextLabel={"Next"}
                    pageCount={pageCount}
                    onPageChange={changePage}
                    containerClassName={"paginationBttns"}
                    previousLinkClassName={"previousBttn"}
                    nextLinkClassName={"nextBttn"}
                    disabledClassName={"paginationDisabled"}
                    activeClassName={"paginationActive"}
                    pageRangeDisplayed={10} marginPagesDisplayed={10}
                    data-testid="pagination" />         
        </div> 
>>>>>>> 7b44d4d19e513edb805d5a0e39bfa89ef55dde3d
    )
}

export default Dashboard

