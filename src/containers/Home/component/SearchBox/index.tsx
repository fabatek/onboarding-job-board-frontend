import React, {useState, useEffect} from 'react'
import Result from '../Result/Result'
import './searchbox.scss'
import axios from 'axios'

interface IUser {
    id: number;
    Available: boolean;
    JobName: string;
    Company: string;
    Tags: string;
    jobType: string;
    Location: string;
    Salary: number;
    Title: string;
}

const URL = 'https://61484173035b3600175b9d08.mockapi.io/api/jobs/jobs'

export default function Content() {
    const [totalJobs, setTotalJobs] = useState<IUser[]>([])
    const [availableJobs, setAvailableJobs] = useState<IUser[]>([])

    useEffect(() => {
        const handleGetData = async () => {
            await axios.get(URL)
            .then(res => { 
                setTotalJobs(res.data)       
            })
            .catch(err => {
                alert(err)
            })
        }
        handleGetData()
        
    },[])

    useEffect(() => {
        if (totalJobs) {
            const hiringJobs:any = totalJobs.filter(job => job.Available === true)
            setAvailableJobs(hiringJobs.length);
        }
    }, [totalJobs])

    return (
        <div className='searching_box bg-dark text-white'>
            <div className='searching_input d-flex flex-column container justify-content-center align-items-start d-block'>
                <h4 className='searching_title'>{`${availableJobs}`} Jobs are availables in total {`${totalJobs.length}`} jobs</h4>
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
            <Result/>
        </div>
    )
}
