import React from 'react'
import './searchbox.scss'

interface Props {
    availableJobs: number;
    totalJobs: number;
}

const Content: React.FC<Props> = ({availableJobs, totalJobs}) => {
    return (
        <div className='searching_box bg-dark text-white container-fluid' data-testid='searching_box'>
            <div className='searching_input d-flex flex-column container justify-content-center align-items-start d-block'>
                <h4 className='searching_title' data-testid='seaching_title'>{`${availableJobs}`} Jobs are availables in total {`${totalJobs}`} jobs</h4>
                <div className='searching_input d-flex'>
                    <input className='input_field' placeholder='Keyword skill (Java, iOS), Job Title, Company...'/>
                    <select className='location_input'>
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