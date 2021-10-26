
import React from "react";

import "./Container.scss";
import ListsJobs from "./ListJobs/ListsJobs";


function Container() {
	return (
        <div className="container">
            <div className="container__body">
                <ListsJobs />
                
            </div>
        </div>
	);
}

export default Container;
