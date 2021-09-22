import React from 'react'
import {Jobs} from '../Jobs'
import Logo from '../../../../logo.svg'
import './result.scss'

interface Props {
    totalJobs: Jobs[]
}

interface PropsBox {
    title:string;
    company: string;
    available: boolean;
    position: string;
    location: string;
    salary: number;
}

const Box:React.FC<PropsBox> = ({title, company, available, position, location, salary}) => {
    return (
        <div className='col-sm-6 col-md-4 col-lg-3 col-xl-3 card_custom'>
            <div className='card'>
                <img className='card-img-top' src={Logo} alt='Card img'/>
                <div className='card-body'>
                    <h5 className='card-title'>{title}</h5>
                    <p className='card-text'>{company} is looking for {position} </p>
                    <p className='card-text'>{location}</p>
                    <p className='card-text'><b>Salary</b>: Up to {`${salary*10}`}$</p>
                    {available ? 
                    (
                        <button className='btn btn-primary btn_position'>Read more</button>
                    )
                    :
                    (
                        <button className='btn btn-danger btn_position'>Expired</button>
                    )
                    }
                </div>
            </div>
        </div>
    )
}

const Result:React.FC<Props> = ({totalJobs}) => {
    return (
        <div className='container result_container'>
            <div className='row result_detail'>
                {totalJobs && totalJobs.slice(0, 100).map(
                    (job, index) => {
                        return (
                            <Box
                            key={index} 
                            title={job.JobName}
                            company={job.Company}
                            available={job.Available}
                            position={job.jobType}
                            location={job.Location}
                            salary={job.Salary}
                            />
                        )
                    }
                )}
            </div>
        </div>
    )
}

export default Result
