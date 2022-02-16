import React, { useEffect, useState } from 'react'
import { FormControl, Button, Form } from 'react-bootstrap';
import './styles.scss';
import { useSelector } from 'react-redux';
import { Job } from '../../state/constants/jobConstant';
import { RootState } from '../../state/reducers';
import { useDispatch } from 'react-redux';
import { SEARCH_JOBS,GET_JOBS_LOADING } from "../../state/constants/jobConstant";
import { fetchJobsData } from "../../api/jobApi"




function SearchHeader() {
  const dispatch = useDispatch();
  const [jobList, setJobList] = useState<Job[]>([]);
  const [text, setText] = useState<String>("");
  const jobsData = useSelector((state: RootState) => state.getJobData);
  const { jobs } = jobsData;


  const searchHandler =async (e: React.FormEvent) => {
    e.preventDefault();
    dispatch({ type: GET_JOBS_LOADING });
    const oldJobs = await fetchJobsData("");
    dispatch({type:SEARCH_JOBS ,payload:{ oldJobs, text}})
  }
  const onChange = (e: any) => {
      setText(e.target.value);
  }
  useEffect(() => {
    if (jobs) {
      setJobList(jobs);
    }
  }, [jobs])

  return (
    <div className="search-header">
      <h2 className="mb-3" data-testid="job-hiring">Có {jobList.length} Công Việc IT Dành Cho Bạn</h2>
      <form className="search-header__form" onSubmit={searchHandler}>
        <FormControl
          type="text"
          placeholder="Tìm kiếm theo chức vụ, kỹ năng, công ty..."
          onChange={onChange}
        />
        <Form.Select aria-label="Default select example">
          <option value="1">Tất Cả</option>
          <option value="2">Ho Chi Minh</option>
          <option value="3">Ha Noi</option>
          <option value="3">Da Nang</option>
        </Form.Select>
        <Button variant="danger" type="submit">Tìm Kiếm</Button>
      </form>
    </div>
  )
}

export default SearchHeader
