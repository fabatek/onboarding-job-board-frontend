import React, { useEffect,useState } from 'react'
import { DispatchType, RootState } from '../../redux/store/store'
import { getAllJobs } from '../../redux/reducer/jobs'
import {useDispatch,useSelector} from 'react-redux';
import JobTicket from '../../components/Job/JobTicket';
import { JobModal } from '../../type/type';
import axios from 'axios'
type Props = {}

const ShowAllJobs = (props: Props) => {
    const {allJobs} = useSelector((state:RootState) => state.jobReducer)
    const dispatch:DispatchType = useDispatch()
   
    useEffect(() =>{
      const getjobFromApi = () => {
        dispatch(getAllJobs())
      }
  
      getjobFromApi()
    
      
    },[])

  console.log(allJobs)
  return (
    <div className="show-all-jobs">
        <div className="container d-grid">
            <div className="row">
            <div className="col bg-white p-0 overflow-scroll" style={{ height:'100vh'}}>
                <div className="">
                    <h2 className="p-3">{allJobs.length} It jobs in viet nam</h2>
                    <ul className="list-unstyled">
                  {
                    allJobs.map((item:any,index:number)=>(
                        <li key={index}>
                          <JobTicket item={item}/>
                        </li>
                    ))
                  }
                  </ul>
                </div>
            </div>
            <div className="col">
                job detail
            </div>
            </div>
        </div>
    </div>
  )
}

export default ShowAllJobs