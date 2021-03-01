import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import JobList from '../../components/Job/JobList';
import Panigation from '../../components/Job/Pagination';
import { fetchAllJobs, jobList, totalJobs } from '../jobSlice';

function JobFeature(props: any) {
  //redux
  const dispatch = useDispatch();
  dispatch(fetchAllJobs({}));

  const total = useSelector(totalJobs);
  const list = useSelector(jobList);

  const [currentPage, setCurrentPage] = useState(1);
  const [jobsPerPage] = useState(20);

  //panigation
  // Get current posts
  const indexOfLastPost = currentPage * jobsPerPage;
  const indexOfFirstPost = indexOfLastPost - jobsPerPage;
  const currentPosts = list.slice(indexOfFirstPost, indexOfLastPost);

  // Change page
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <div>
      <JobList totalJobs={total} displayListJob={currentPosts} />
      {/* <Panigation
        jobsPerPage={jobsPerPage}
        totalJobs={list.length}
        paginate={paginate}
      /> */}
    </div>
  );
}

export default JobFeature;
