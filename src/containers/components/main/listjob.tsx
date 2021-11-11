import axios from 'axios'
import React, { FC, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { getJobs } from '../../../api'
import './listjob.scss'

interface Job {
  jobs: [],
}

type JobsType = {
  readonly id?: string,
  readonly job_name?: string,
  readonly salary?: number,
  readonly avatar?: string,
  readonly job_description?: string,
  readonly location?: string,
  readonly time: string,
  readonly skill?: string[],
}

export const Content: FC<Job> = (jobs): JSX.Element => {
  const changeDate = (date: string) => {
		var newDate = new Date(date);
		return newDate.toDateString();
	}

  return (
    <section className="list_job">
        {jobs ? jobs.jobs.map((job: JobsType,index)=>{
          return (
            <div className="short-list-job" key={job.id}>
              <img src={job.avatar} alt="#" className="job_img"/>
              <div className="info">
                <p>
                  <Link to={`/jobList/${job.id}`} className="job_name">{job.job_name}</Link>
                  </p>
                <p className="salary">• Salary: {job.salary}$</p>
                <p className="location">• Location: {job.location}</p>
                <p className="date">• Time: {changeDate(job.time)}</p>
              </div>
            </div>
          )
        }) : null}
        <div className="detail">

        </div>
    </section>
  )
}
