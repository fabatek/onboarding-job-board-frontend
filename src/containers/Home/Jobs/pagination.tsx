import React from "react";
const Pagination =(jobPerPage:number, totalJobs: number,paginate:any ) => {
    const pageNumber = [];

    for (let i = 1; i <= Math.ceil(totalJobs / jobPerPage); i++) {
        pageNumber.push(i);
    }
    return pageNumber?.map((number) => {
        return (
            <li className='page-item' key={number}>
                <a onClick={()=>paginate(number)} href='#listJobs' className='page-link'>
                    {number}
                </a>
            </li>
        )
    })
}
export default Pagination