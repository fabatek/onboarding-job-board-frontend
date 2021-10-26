
import React from "react";

import "./Container.scss";
import DetailJob from "./DetailJob/DetailJob";
import ListsJobs from "./ListJobs/ListsJobs";


function Container() {
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
