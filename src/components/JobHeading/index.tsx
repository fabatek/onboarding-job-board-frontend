import React from "react";
import axios from 'axios';

import "./Style.scss";


function JobHeading(prop: any) {

    return (
        <>
            <p className="right"> {prop.jobAmount} IT jobs are available</p>
        </>
    );
}

export default JobHeading;