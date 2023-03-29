import { useEffect, useState } from "react"
import { useSelector } from "react-redux";
import { RootState } from "../../../Redux/store/store";

export default function Pagination(props: { jobsPerPage: number, totalJobs: number, paginate: any, currentPage: number, totalSearchJob: number }) {

    const { jobsPerPage, totalJobs, paginate, currentPage, totalSearchJob } = props
    const [pageNumber, setPageNumber] = useState<Number[]>([]);
    const [totalPage, setTotalPage] = useState<Number>(Math.ceil(totalJobs / jobsPerPage))
    const { search } = useSelector((state: RootState) => state.search)
    useEffect(() => {
        setTotalPage(Math.ceil(totalSearchJob / jobsPerPage))
    }, [search])
    useEffect(() => {
        const listPageNumber = []
        for (let i = 1; i <= totalPage; i++) {
            listPageNumber.push(i)
        }
        setPageNumber(listPageNumber);
    }, [totalPage])

    return (
        <>
            {pageNumber.map((number, index) => {
                return (
                    <li className='page-item pagination__item' data-testid="pagination" key={index} >
                        <a onClick={() => {
                            paginate(number)
                        }} href="/#" className={`page-link pagination__item__link ${number === currentPage ? "pagination__item--active" : ""}`}>
                            {number}
                        </a>
                    </li>
                )
            })}
        </>
    )
}
