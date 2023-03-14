import React from 'react'
import Job from '../type'


export default function ListJob(currentJob: Job[]) {
    return <>
    {currentJob?.map((item: Job, key: number) => {
        return (
            <a key={key}>
                <li className={`list-group-item d-flex job-content`}>
                    <img alt='logo' src='https://itviec.com/rails/active_storage/representations/proxy/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBLzRvREE9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--0c0d2b976b107ef51289f0361754cea78ab9313e/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCem9MWm05eWJXRjBTU0lJY0c1bkJqb0dSVlE2RTNKbGMybDZaVjloYm1SZmNHRmtXd2RwUm1sRyIsImV4cCI6bnVsbCwicHVyIjoidmFyaWF0aW9uIn19--80ef1c6b35a79f9e028daec95b88475f53428fd7/floware-logo.png' />
                    <div className='job-tittle'>
                        <h6>{item.tenCV}</h6>
                        <p>{item.congNghe}</p>
                    </div>
                    <div className='job-city'>{item.city}</div>
                </li>
            </a>
        )
    })}
    </>
}

