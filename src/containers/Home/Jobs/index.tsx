import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { actFetchJob } from '../Search/modules/action';
import ReactDOM from 'react-dom';
import ReactPaginate from 'react-paginate';
export default function Jobs() {
    const dispatch = useDispatch();
    
    const data = useSelector((state: any) => state.jobReducer.data);
    const [jobs, setJobs] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [jobPerPage, setJobPerPage] = useState(10);
    const indexOfLastPost = currentPage * jobPerPage;
    const indexOfFisrtPost = indexOfLastPost - jobPerPage;
    const currentJob = jobs?.slice(indexOfFisrtPost, indexOfLastPost);
    useEffect(() => {
        dispatch(actFetchJob())
        setJobs(data);
    }, [])
    const renderJob = () => {
        return currentJob?.map((item:any)=>{
            return(
                <li className='list-group-item d-flex'>
                    <img src='https://itviec.com/rails/active_storage/representations/proxy/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBLzRvREE9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--0c0d2b976b107ef51289f0361754cea78ab9313e/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCem9MWm05eWJXRjBTU0lJY0c1bkJqb0dSVlE2RTNKbGMybDZaVjloYm1SZmNHRmtXd2RwUm1sRyIsImV4cCI6bnVsbCwicHVyIjoidmFyaWF0aW9uIn19--80ef1c6b35a79f9e028daec95b88475f53428fd7/floware-logo.png' />
                    <div>
                    {item.tenCV}
                    <p>{item.congNghe}</p>
                    </div>
                </li>
            )
        })
    }
return (
    <div className='container'>
        <ul className='list-group mb-4'>
            {renderJob()}
        </ul>
    </div>
)
}
