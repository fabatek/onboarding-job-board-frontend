import { useEffect} from 'react'

import { useDispatch, useSelector  } from 'react-redux'
import {fetchJobs} from "../redux/actions/jobActions"

// import JobComponent from '../Job_Component/JobComponent'

const JobList = () => {
  const dispatch = useDispatch()
  const jobs = useSelector((state) => state)
  
  //FetchJobs Data With Axios From MockAPI(jobs)
  //Use Hook useEffect
  useEffect(() => {
    dispatch(fetchJobs())
  },[])
  console.log("Jobs: ", jobs)
  return (
    <section className="container container-fluid py-5">
      <div className="row py-5">
        <div className="card-body">
          <div className="card-heading d-flex justify-content-center align-content-center">
            This is Top Jobs
          </div>
        </div> 
        {/* <JobComponent/> */}
      </div>
    </section>
  )
}

export default JobList
