import React,{useState, useEffect, FC} from 'react'
import './Dashboard.scss'
import ReactPaginate from 'react-paginate';
import axios from 'axios';

const Dashboard : FC = () => {
    const [jobs, setJobs] = useState([].slice(0, 100));
    const [pageNumber, setPageNumber] = useState(0);
    const jobsPerPage = 10; 
    const pagesVisited = pageNumber * jobsPerPage;
    const [searchTerm,setSearchTerm ] = useState("");
        
    useEffect(() => {
        axios.get('https://6176370c03178d00173daae3.mockapi.io/api/api')
        .then(res => {
            setJobs(res.data)
        }).catch(err => {
            console.log(err);
        })
    },[])
    
    //Pagination
    const pageCount = Math.ceil(jobs.length / jobsPerPage);
    const changePage = ( {selected}:any ) => {
            setPageNumber(selected);
        };
    
    return (
        <div className="dashBoard">
            <h1>Có tất cả {jobs.length} IT Jobs For Chất Developers</h1>
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
                                    <a href="" id="name">{jobs.jobName}</a>
                                    <a href="" id="company">{jobs.jobCompany}</a>
                                    <a href="" id="type">{jobs.jobType}</a>
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
                    data-testid="pagination"
                     />         
        </div> 
    )
}

export default Dashboard
