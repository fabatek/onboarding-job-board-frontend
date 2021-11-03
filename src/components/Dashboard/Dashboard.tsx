import React,{useState, useEffect, FC} from 'react'
import './Dashboard.scss'
import { Dropdown, Form } from 'react-bootstrap';
import ReactPaginate from 'react-paginate';
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
                    
                    <Form.Control type="text" placeholder="Search..." onChange={(e)=>{ setSearchTerm(e.target.value)}} />
                    
                    <Dropdown>
                        <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                            City
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item href="#/action-1">Ha Noi</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Ho Chi Minh</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Da Nang</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </div>
            </div>
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
                    data-testid="pagination"/>
        </div> 
    )
}

export default Dashboard
