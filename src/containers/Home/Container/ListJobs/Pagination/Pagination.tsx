import React, { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"

import { RootStore } from "../../../../../utils/TypeScripts"
import { setJobsPerPage } from "../../../../../redux/actions/JobsAction"
import { Job } from "../../../../../redux/types/jobsType"
import './Pagination.scss'

const Pagination = () => {
    const currentTotalJobs = useSelector((state: RootStore) => state.jobs)
    const dispatch = useDispatch()
    const [totalPage, setTotalPage] = useState(0)
    useEffect(() => {
        if (Object.keys(currentTotalJobs).length % 10 === 0) {
           setTotalPage(Math.round(Object.keys(currentTotalJobs).length / 10))
        }
        else {
            setTotalPage(Math.round(Object.keys(currentTotalJobs).length / 10) + 1)
        }
    }, [currentTotalJobs])

    const newArr = currentTotalJobs.slice(0, totalPage)
    return (
        <div className="paginate">
            {
                newArr && newArr.map((arr, index) => {
                    return (
                        <a href="/#" className="paginate__button" onClick={() => dispatch(setJobsPerPage(index + 1,currentTotalJobs))} key={index}>{index + 1}</a>
                    )
                })
            }
        </div>
    )
}
export default Pagination