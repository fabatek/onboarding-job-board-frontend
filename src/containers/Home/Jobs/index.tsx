import React from 'react'
import "./style.scss"
import ListJob from './ListJob';
export default function Jobs() {
    return (
        <div className='container mt-5'>
            <ul className='list-group mb-2' id='listJobs'>
            <ListJob />
            </ul>
            <nav >
                <ul className='pagination'>                 
                </ul>
            </nav>
        </div>
    )
}

