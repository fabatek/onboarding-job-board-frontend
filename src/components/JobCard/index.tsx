import React from "react";
import Image from "react-bootstrap/Image"
import moment from 'moment';
import "./Style.scss";


function JobCard(prop: any) {

    return (
        <div className="row job-card mb-3">
            <div className="col-4">
                <Image src={process.env.PUBLIC_URL  + '/logo.png'} className="round d-block"/>
                <p className="text-left">{prop.jobCompany}</p>
            </div>
            <div className="col-8 text-left">
                <div className="row">
                    <div className="col-10">
                        <h2>{prop.jobTitle}</h2>
                    </div>
                    <div className="col-2">
                        <p>{moment(prop.jobPublishDate).fromNow()}</p>
                    </div>
                </div>
                
                <p className="job-salary">Salary: {prop.jobSalary} </p>
                <p className="job-description">{prop.jobDescription.substr(0,500)}</p>
                <p className="job-categories">{prop.jobCategories}</p>
            </div>
        </div>
    );
}

export default JobCard;