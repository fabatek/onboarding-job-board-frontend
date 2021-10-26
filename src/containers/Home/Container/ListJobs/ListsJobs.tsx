import React, { FC, useEffect, useState } from "react";
import { useSelector } from "react-redux";

import { RootStore } from "../../../../utils/TypeScripts";
import "./ListsJobs.scss";

const ListsJobs: FC = () => {
    const getjobs = useSelector((state: RootStore) => state.jobs)
    const [lists, setLists] = useState([])
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
