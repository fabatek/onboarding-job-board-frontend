import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import './header.scss';

interface Job {
  jobs: [],
}

export const JobList: FC = (): JSX.Element => {
  const jobs = useSelector((state: Job)=>{return state.jobs})

  return (
    <section className="header">
        <h1 className="title">{jobs.length} Jobs are available</h1>
        <input type="text" className="input_search" placeholder="Input title job"/>
        <button className="btn_search">Search</button>
    </section>
  )
}