import React, { FC, useEffect, useState } from "react";
import { useSelector } from "react-redux";

import { RootStore } from "../../../../utils/TypeScripts";
import { Job } from "../../../../redux/types/jobsType";
import "./ListsJobs.scss";

const ListsJobs: FC = () => {
    const getJobs = useSelector((state: RootStore) => state.jobs)
    const [lists, setLists] = useState<Job[]>()
    useEffect(() => {
        setLists(getJobs)
    }, [getJobs])
    return (
        <div className="ListsJobs">
            <div className="jobs__title">
                {Object.keys(getJobs).length} việc làm IT tại Việt Nam
            </div>
            {
                lists && <ul className="list__jobs">
                    {
                        lists.map((item: Job, index) => {
                            return (
                                <li className="job__item" key={index} data-testid= "item-job" >
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
        </div>
    );
}

export default ListsJobs;
