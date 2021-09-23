import React from 'react'
import './searchbox.scss'
import { useAppSelector } from '../../../redux/hook'

const Content = () => {
    const totalJobs = useAppSelector((state) => state.jobs.totalJobList)
    const availableJobs:any = totalJobs.filter(job => job.Available === true)

    return (
        <div className='searching_theme bg-dark text-white container-fluid' data-testid='searching_box'>
            <div className='searching_container d-flex flex-column container justify-content-center align-items-center d-block'>
                <h4 className='searching_title' data-testid='seaching_title'>{`${availableJobs.length}`} Jobs are availables in total {`${totalJobs.length}`} jobs</h4>
                <div className='searching_input d-flex justify-content-center'>
                    <input className='searching_input-text' placeholder='Keyword skill (Java, iOS), Job Title, Company...'/>
                    <select className='searching_input-select'>
                        <option value="All">All cities</option>
                        <option value="HCM">Ho Chi Minh</option>
                        <option value="HN">Ha Noi</option>
                        <option value="DN">Da Nang</option>
                        <option value="Others">Others</option>
                    </select>
                    <button className='searching_btn btn btn-danger'>
                        Search
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Content