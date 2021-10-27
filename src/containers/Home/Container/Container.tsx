
import React from "react";

import DetailJob from "./DetailJob/DetailJob";
import ListsJobs from "./ListJobs/ListsJobs";
import "./Container.scss";

const Container = () => {
    return (
        <div className="container">
            <div className="container__body">
                <ListsJobs />
                <DetailJob />
            </div>
        </div>
    );
}

export default Container;
