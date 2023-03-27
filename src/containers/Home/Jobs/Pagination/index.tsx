import { useEffect, useState } from "react"

export default function Pagination(props: { jobsPerPage: number, totalJobs: number, paginate: any, currentPage: number }) {

    const { jobsPerPage, totalJobs, paginate, currentPage } = props
    const [pageNumber, setPageNumber] = useState<Number[]>([]);
    const totalPage = Math.ceil(totalJobs / jobsPerPage);
    useEffect(() => {
        const listPageNumber = []
        for (let i = 1; i <= totalPage; i++) {
            listPageNumber.push(i)
        }
        setPageNumber(listPageNumber);
    }, [totalPage])

    return (
        <>
            {pageNumber.map((item, index) => {
                return (
                    <li className='page-item pagination__item' data-testid="pagination" key={index} >
                        <a onClick={() => {
                            paginate(item)
                        }} href="/#" className={`page-link pagination__item__link ${item === currentPage ? "pagination__item--active" : ""}`}>
                            {item}
                        </a>
                    </li>
                )
            })}
        </>
    )
}
