import React from "react";

import ListsJobs from "./ListJobs/ListsJobs";
import "./Container.scss";

const Container =()=>{
	return (
        <div className="container">
            <div className="container__body">
                <ListsJobs />
            </div>
        </div>
	);
}

export default Container;
