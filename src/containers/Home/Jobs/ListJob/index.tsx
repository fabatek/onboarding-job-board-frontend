import React from 'react'
import Job from '../type'


export default function ListJob(props:{currentJob:Job[]}) {
    const {currentJob} = props
    return <>
    {currentJob?.map((item: Job, key: number) => {
        return (
            <a key={key}>
                <li className={`list-group-item d-flex job-content`}>
                    <img alt='logo' src={item.img} />
                    <div className='job-tittle'>
                        <h6>{item.tenCV}</h6>
                        <p>
                            <ul className='job-tech'>
                                <li>Html</li>
                                <li>Css</li>
                            </ul>
                        </p>
                    </div>
                    <div className='job-city'>{item.city}
                    <p className='job-posted'>1 day ago</p>
                    </div>
                </li>
            </a>
        )
    })}
    </>
}

