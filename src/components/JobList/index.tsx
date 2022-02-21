import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { Job } from '../../state/constants/jobConstant';
import { RootState } from '../../state/reducers';
import JobContent from '../JobContent/index'
import JobContentPreview from '../JobContentPreview';
import MessageBox from '../MessageBox/index';
import Page from '../Page';
import './styles.scss'
interface PropsType {
  text:String;
}
function JobList({text} :PropsType) {
  const [jobList, setJobList] = useState<Job[]>([]);
  const jobsData = useSelector((state: RootState) => state.getJobData);
  const { loading, jobs, error, jobsOfPage } = jobsData;
  const [selectedJob, setSelectedJob] = useState<Job>();

  useEffect(() => {
    if (jobsOfPage) {
      setJobList(jobsOfPage);
      setSelectedJob(jobs[0])
    }
  }, [jobs, jobsOfPage])
  
  return (
    <div className="jobs-container" >
      {loading ? <MessageBox variant="success"><i className="fas fa-spinner fa-spin" /> Loading</MessageBox> :
        error ? <MessageBox variant="danger">{error}</MessageBox> :
          <div className="jobs-inner">
            <h2>Có {jobList.length} Công Việc IT Dành Cho Bạn</h2>
            <div className="jobs-content">
              {selectedJob && jobList.map((job, index) => {
                return <JobContent
                  data-testid={`job-content-${index}`}
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
            <Page
            text={text}
              jobList={jobs}
            />
          </div>
      }
      <div className="jobs-preview" data-testid="job-preview">
        {selectedJob && <JobContentPreview
          title={selectedJob.title}
          company={selectedJob.company}
          description={selectedJob.description}
          requirement={selectedJob.requirements}
          benefits={selectedJob.benefits}
          salary={selectedJob.salary}
          createAt={selectedJob.createAt}
        />}
      </div>
    </div>
  )
}

export default JobList;