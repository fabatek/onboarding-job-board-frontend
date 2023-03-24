import React from 'react'

export default function Pagination(props: { jobsPerPage: number, totalJobs: number, paginate: any }) {
    const { jobsPerPage, totalJobs, paginate } = props
    const pageNumber = []
    for (let i = 1; i <= Math.ceil(totalJobs / jobsPerPage); i++) {
        pageNumber.push(i)
    }
    return (
        <>
            {pageNumber.map((item) => {
                return (
                    <li className='page-item pagination__item'>
                        <a onClick={() => {
                            paginate(item)
                        }} href="/#" className='page-link pagination__item__link'>
                            {item}
                        </a>
                    </li>
                )
            })}
        </>
    )
}
