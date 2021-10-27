import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Job } from "../../../../redux/types/jobsType";

import { RootStore } from "../../../../utils/TypeScripts";
import "./ListsJobs.scss";

const ListsJobs= () => {
    const getjobs = useSelector((state: RootStore) => state.jobs)
    const [lists, setLists] = useState<Job[]>([])
    useEffect(() => {
        setLists(getjobs)
    }, [getjobs])
    return (
        <div className="ListsJobs">
            <div className="jobs__title">
                {lists.length} việc làm IT tại Việt Nam
            </div>
        </div>
    );
}

export default ListsJobs;
