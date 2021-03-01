import React, { useEffect, useState } from 'react';
import jobAPI from '../../../services/jobAPI';
import Job from '../../../types/Job';
import JobList from '../../components/Job/JobList';
import Panigation from '../../components/Job/Pagination';

function JobFeature(props: any) {
  const [totalJobs, setTotalJobs] = useState('Loading...');
  const [displayListJob, setDisplayListJob] = useState<Job[]>([]);

  const [currentPage, setCurrentPage] = useState(1);
  const [jobsPerPage] = useState(10);

  useEffect(() => {
    const fecthJobs = async () => {
      const params = {
        limit: 100,
      };

      const jobList = await jobAPI.getAll(null);
      setTotalJobs(jobList.data['job-count']);

      const displayList = await jobAPI.getAll(params);
      // console.log(displayList.data);
      setDisplayListJob(displayList.data.jobs);
    };
    fecthJobs();
  }, []);

  //panigation
  // Get current posts
  const indexOfLastPost = currentPage * jobsPerPage;
  const indexOfFirstPost = indexOfLastPost - jobsPerPage;
  const currentPosts = displayListJob.slice(indexOfFirstPost, indexOfLastPost);

  // Change page
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <div>
      <JobList totalJobs={totalJobs} displayListJob={currentPosts} />
      <Panigation
        jobsPerPage={jobsPerPage}
        totalJobs={displayListJob.length}
        paginate={paginate}
      />
    </div>
  );
}

export default JobFeature;
