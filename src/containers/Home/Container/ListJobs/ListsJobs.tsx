import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { RootStore } from "../../../../utils/TypeScripts";
import { Job } from "../../../../redux/types/jobsType";
import { setDetailJob } from "../../../../redux/actions/JobsAction";
import "./ListsJobs.scss";
import Pagination from "./Pagination/Pagination";

const ListsJobs = () => {
    const jobsPerPage = useSelector((state: RootStore) => state.jobsPerPage)
    const jobs = useSelector((state: RootStore) => state.jobs)
    const dispatch = useDispatch()
    const [lists, setLists] = useState<Job[]>()
    useEffect(() => {
        setLists(jobsPerPage)
    }, [jobsPerPage])
    return (
        <div className="ListsJobs">

            <div className="jobs__title">
                {Object.keys(jobs).length} việc làm IT tại Việt Nam
            </div>
            {
                lists && <ul className="list__jobs">
                    {
                        lists.map((item: Job, index) => {
                            return (
                                <li
                                    className="job__item"
                                    key={index}
                                    onClick={() => dispatch(setDetailJob(item))}>
                                    <img
                                        className="job__item-img"
                                        src={item.image}
                                        alt=""
                                    />
                                    <div className="job__item-info">
                                        <div className="job__name">
                                            {item.title}
                                        </div>
                                        <div className="job__salary">
                                            ${item.salary}
                                        </div>
                                        <div className="job__skill">
                                            {
                                                item.skills && item.skills.map((skill, index) => {
                                                    return (
                                                        <div key={index} className="job__skill-item">
                                                            {skill}
                                                        </div>
                                                    )
                                                })
                                            }
                                        </div>
                                    </div>
                                </li>
                            )
                        })
                    }
                </ul>
            }
            <Pagination />
        </div>
    );
}

export default ListsJobs;
