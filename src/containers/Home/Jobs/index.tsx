
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Job from './type';
import "./style.css"
import Pagination from './pagination';
import ListJob from './ListJob';
export default function Jobs() {
    const [jobs , setJobs] = useState<Job[]>([]);
    useEffect(()=>{
        axios.get(`${process.env.REACT_APP_API_URL}/products`)
        .then(res =>{
         setJobs(res.data)
        })
        .catch(error => console.log(error));
    },[]);
    const [currentPage, setCurrentPage] = useState(1);
    const jobPerPage = 10;
    const indexOfLastPost = currentPage * jobPerPage;
    const indexOfFisrtPost = indexOfLastPost - jobPerPage;
    const currentJob = jobs?.slice(indexOfFisrtPost, indexOfLastPost);
    const paginate = (pageNumber:number) => setCurrentPage(pageNumber)
    // const renderJob = () => {
    //     return currentJob?.map((item: Job,key) => {
    //         return (
    //             <a key={key}>
    //                 <li className={`list-group-item d-flex job-content`}>
    //                 <img alt='logo' src='https://itviec.com/rails/active_storage/representations/proxy/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBLzRvREE9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--0c0d2b976b107ef51289f0361754cea78ab9313e/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCem9MWm05eWJXRjBTU0lJY0c1bkJqb0dSVlE2RTNKbGMybDZaVjloYm1SZmNHRmtXd2RwUm1sRyIsImV4cCI6bnVsbCwicHVyIjoidmFyaWF0aW9uIn19--80ef1c6b35a79f9e028daec95b88475f53428fd7/floware-logo.png' />
    //                 <div className='job-tittle'>
    //                     <h6>{item.tenCV}</h6>
    //                     <p>{item.congNghe}</p>       
    //                 </div>
    //                 <div className='job-city'>{item.city}</div>
    //             </li>
    //             </a>
    //         )
    //     })
    // }
    console.log(currentJob);
    return (
        <div className='container mt-5'>
           <div className='row'>
            <div className='col-6'>
            <ul className='list-group mb-2' id='listJobs'>
            <ListJob currentJob={currentJob} />
            </ul>
            <nav >
                <ul className='pagination'>
                    {Pagination(jobPerPage,jobs.length,paginate)}
                </ul>
            </nav>
            </div>
            <div className='col-6'>
                
            </div>
           </div>
        </div>
    )
}
