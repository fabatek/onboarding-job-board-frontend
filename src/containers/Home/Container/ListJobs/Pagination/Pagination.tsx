import React, { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"

import { RootStore } from "../../../../../utils/TypeScripts"
import { setJobsPerPage } from "../../../../../redux/actions/JobsAction"
import './Pagination.scss'

const Pagination = () => {
    const currentTotalJobs = useSelector((state: RootStore) => state.jobs)
    const currentPage = useSelector((state: RootStore) => state.page)
    const dispatch = useDispatch()
    const [totalPage, setTotalPage] = useState(0)
    useEffect(() => {
        if (Object.keys(currentTotalJobs).length % 10 === 0) {
            setTotalPage(Math.round(Object.keys(currentTotalJobs).length / 10))
        }
        else {
            setTotalPage(Math.floor(Object.keys(currentTotalJobs).length / 10) + 1)
        }
    }, [currentTotalJobs])
    const newArr = currentTotalJobs.slice(0, totalPage)
    return (
        <div className="paginate">
            {
                newArr && newArr.map((arr, index) => {
                    return (
                        <span
                            className={index + 1 === currentPage ? "paginate__button--active" : "paginate__button"}
                            onClick={() => dispatch(setJobsPerPage(index + 1, currentTotalJobs))}
                            key={index}
                        >
                            {index + 1}</span>
                    )
                })
            }
        </div>
    )
}
export default Pagination