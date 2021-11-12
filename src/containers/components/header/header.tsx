import axios from 'axios';
import React, { Children, FC, useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getJobs } from '../../../api';
import './header.scss'


interface FuncProps {
  onSubmit: (value: {})=> void
}

export const JobList: FC<FuncProps> = ({onSubmit}): JSX.Element => {
  const jobs = useSelector((state: any)=>{ return state.jobs} )
  const [totalJobs,setTotalJobs] = useState();
  const [searchKey, setSearchKey] = useState("");
  const debounce: any = useRef(null);

  useEffect(()=>{
    axios.get("https://618b2d6b3013680017343f68.mockapi.io/api/v1/jobList")
      .then(res =>{
        setTotalJobs(res.data.length)
      })
      .catch(err =>{ console.log(err)})
  }, [])


  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void =>{
    const key = e.target.value
    setSearchKey(key);
    
    if(debounce.current){
      clearTimeout(debounce.current);
    }
    
    debounce.current = setTimeout(() =>{
      const value = {searchKey: key}
      if(onSubmit){
        onSubmit(value);
      }
    },500)

  }

  return (
    <section className="header">
        <h1 className="title">{totalJobs} Jobs are available</h1>
        <form>
          <input
            type="text"
            className="input_search"
            placeholder="Input title job"
            onChange={handleChange}
            value={searchKey}
          />
          </form>
        {searchKey!== "" ? <h4 className="jobs_match">{jobs.length} job match with "{searchKey}"</h4> : null}
    </section>
  )
}