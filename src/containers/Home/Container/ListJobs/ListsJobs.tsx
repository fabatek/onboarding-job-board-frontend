

import React, { FC, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootStore } from "../../../../utils/TypeScripts";
import { jobs } from "../../../../redux/types/jobsType";
import "./ListsJobs.scss";
import Paginate from "./Paginate/Paginate";


const ListsJobs: FC = () => {
    const jobs = useSelector((state: RootStore) => state.jobs)
    const [lists, setLists] = useState([])
    const [pageNumber, setPageNumber] = useState(0);
    const jobsPerPage = 10;
    const pagesVisited = pageNumber * jobsPerPage;
    useEffect(() => {
        setLists(jobs)
    }, [jobs])

    return (
        <div className="ListsJobs">

            <div className="jobs__title">
                {lists.length} việc làm IT tại Việt Nam
            </div>
            {
                lists && <ul className="list__jobs">
                    {
                        lists.map((item: jobs, index) => {
                            return (
                                <li className="job__item" key={index} >
                                    <img
                                        className="job__item-img"
                                        src="https://icdn.dantri.com.vn/thumb_w/660/2021/09/08/316784x441-1631079051594.jpg"
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
                                                item.skills.map((skill, index) => {
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
            <Paginate />
            

        </div>
    );
}

export default ListsJobs;
