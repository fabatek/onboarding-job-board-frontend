import React, { useEffect, FC} from 'react'
import './Dashboard.scss'
import { Dropdown, Form } from 'react-bootstrap';
import ReactPaginate from 'react-paginate';
import { JobTotal } from '../TotalJobs/Job';
import { useSelector, useDispatch } from 'react-redux';
import { fetchJobs } from '../../data/api'
import { Job } from '../../types/jobsType';
import { search} from '../../action/actions';
import { RootState } from '../../reducer/reducer';
const Dashboard: FC = () => {
    const jobs = useSelector((state: RootState) => state.jobs);
    const pagecount = useSelector((state: RootState) => state.pagecount);
    const perpage = useSelector((state: RootState) => state.perpage);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchJobs())
    }, [dispatch]);

    const changePage = ({ selected }: any) => {
        dispatch(search(selected));
    }
    

    return (
        <div className="dashBoard">
            <JobTotal />
            <div className='search'>
                <div className="search__form">

                    <Form.Control aria-label='Search' type="text" placeholder="Search..." onChange={(e) => { dispatch(search(e.target.value)) }} />

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
            {jobs
                .map((jobVal: Job) => (
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
    )
}

export default Dashboard

