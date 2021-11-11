import React,{ FC} from 'react'
import { useSelector } from '../../hooks/useTypeSelector';
import Job from '../../models/jobModel';
import { JobItem } from '../JobItem';
import './style.scss';
export const JobContent: FC = () => {
    const { total, jobs } = useSelector((state) => state.jobs) || [];

    return (
        <div className="job__content">
                <h1 className="job__content__title">{total} việc làm IT tại Việt Nam</h1>
                {jobs?.map((job:Job) => <JobItem key={job.id} job={job}/>)}
        </div>
    )
}
