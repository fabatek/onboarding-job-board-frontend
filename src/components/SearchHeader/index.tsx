import React, { useEffect, useState } from 'react'
import { FormControl, Button, Form } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { Job } from '../../state/constants/jobConstant'
import { RootState } from '../../state/reducers'
import './styles.scss'

function SearchHeader() {
  const [jobList, setJobList] = useState<Job[]>([]);
  const jobsData = useSelector((state: RootState) => state.getJobData);
  const { jobs, error } = jobsData;
  useEffect(() => {
    if (jobs) {
      setJobList(jobs);
    }
  }, [jobs])

  return (
    <div className="search-header">
      <h2 className="mb-3 total__job">{jobs && `${jobList.length} IT jobs for Developers`}</h2>
      <h2 className="mb-3">{error && error}</h2>
      <form className="search-header__form">
        <FormControl
          type="text"
          placeholder="Keyword skills, Job Title, Company..."
        />
        <Form.Select aria-label="Default select example">
          <option value="1">All Cities</option>
          <option value="2">Ho Chi Minh</option>
          <option value="3">Ha Noi</option>
          <option value="3">Da Nang</option>
        </Form.Select>
        <Button variant="danger" type="submit">Search</Button>
      </form>
    </div>
  )
}

export default SearchHeader
