import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { Job } from '../../state/constants/jobConstant';
import { RootState } from '../../state/reducers';
import JobContent from '../JobContent/index'
import JobContentPreview from '../JobContentPreview';
import MessageBox from '../MessageBox/index';
import Pagination from '../Pagination';
import './styles.scss'

function ListJob() {
  const [currentPage, setCurrentPage] = useState(1);
  const [jobList, setJobList] = useState<Job[]>([]);
  const jobsData = useSelector((state: RootState) => state.getJobData);
  const { loading, jobs, error } = jobsData;
  const [selectedJob, setSelectedJob] = useState<Job>();

  useEffect(() => {
    if (jobs) {
      setJobList(jobs);
      setSelectedJob(jobs[0])
      setCurrentPage(1);
    }

  }, [jobs])
  const jobsPerPage = 10;
  const indexOfLastJob = jobsPerPage * currentPage;
  const indexOfFirstJob = indexOfLastJob - jobsPerPage;
  const currentJobs = jobList.slice(indexOfFirstJob, indexOfLastJob);

  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  }
  return (
    <div className="jobs-container">
      {loading ? <MessageBox variant="success"><i className="fas fa-spinner fa-spin" /> Loading</MessageBox> :
        error ? <MessageBox variant="danger">{error}</MessageBox> :
          <div className="jobs-inner">
            <h2>{jobList.length} IT jobs for Developers</h2>
            <div className="jobs-content">
              {selectedJob && currentJobs.map(job => {
                return <JobContent
                  key={job.id}
                  title={job.title}
                  salary={job.salary}
                  company={job.company}
                  benefits={job.benefits}
                  clickHandler={() => { setSelectedJob(job) }}
                  isSelected={selectedJob.id === job.id}
                />
              })}
            </div>
            <Pagination
              jobsPerPage={jobsPerPage}
              totalJob={jobList.length}
              paginate={paginate}
              pageIsActive={currentPage}
            />
          </div>
      }
      <div className="jobs-preview">
        {selectedJob && <JobContentPreview
          title={selectedJob.title}
          company={selectedJob.company}
          description={selectedJob.description}
          requirement={selectedJob.requirements}
          benefits={selectedJob.benefits}
          salary={selectedJob.salary}
          createAt={selectedJob.createdAt}
        />}
      </div>
    </div>
  )
}

export default ListJob
