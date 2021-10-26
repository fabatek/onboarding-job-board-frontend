
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootStore } from "../../../../utils/TypeScripts";
import { Job } from "../../../../redux/types/jobsType";
import "./DetailJob.scss";



function DetailJob() {
    const detailJob = useSelector((state: RootStore) => state.detailJob)
    const jobs = useSelector((state: RootStore) => state.jobs)
    const [job, setJob] = useState<Job>({})
    useEffect(() => {
        if (detailJob.id === "") {
            setJob(jobs[0])
        }
        else {
            setJob(detailJob)
        }
    }, [jobs, job,detailJob])
    return (
        <>
            {
                job.id && <div className="DetailJob DetailJosb--actiove">

                    <div className="detail__title">{job.title}</div>
                    <div className="detail__action">
                        <button className="detail__action-apply">Apply Now</button>
                        <i className="detail__action-icon far fa-heart"></i>
                    </div>
                    <div className="detail__salary">
                        <i className="detail__salary-icon fas fa-dollar-sign"></i>
                        <span className="detail__salary-usd">Up to {job.salary}</span>
                    </div>
                    <div className="detail__reason-title">TOP 3 REASON TO JOIN US</div>
                    <ul className="detail__reason-list">
                        {
                            job.reason && job.reason.map((rea, index) => {
                                return (
                                    <li key={index} className="detail__reason-item">{rea}</li>

                                )
                            })
                        }

                    </ul>
                    <div className="detail__desc-title">Job Description </div>
                    <ul className="detail__desc-list">
                        {
                            job.desc && job.desc.map((des, index) => {
                                return (
                                    <li key={index} className="detail__desc-item">{des}</li>

                                )
                            })
                        }

                    </ul>
                    <div className="detail__skills-title">Your Skills and Experience</div>
                    <ul className="detail__skills-list">
                    {
                            job.skills && job.skills.map((skill, index) => {
                                return (
                                    <li key={index} className="detail__skill-item">{skill}</li>

                                )
                            })
                    }
        
                    </ul>
                </div>
            }
        </>

    );
}

export default DetailJob;
