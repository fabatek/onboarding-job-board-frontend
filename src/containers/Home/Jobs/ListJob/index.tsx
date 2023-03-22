import { useEffect } from 'react'
import Job from '../../../model/job';
import { getJobs } from '../../../Redux/jobs/jobSlice';
import { useSelector, useDispatch } from "react-redux"
import { RootState } from '../../../Redux/store/store';
import Loading from '../../../components/Loading';
export default function ListJob() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getJobs());
    }, []);
    const { data: jobs, loading } = useSelector((state: RootState) => state.jobs)
    return (
        <div data-testid="test100Job">
            {loading ? <Loading /> : jobs?.map((item: Job, key: number) => {
                return (
                    <li key={key} className={`list-group-item d-flex job`}>
                        <img className='job__img' alt='logo' src={item.img} />
                        <div className='job__tittle'>
                            <h4>{item.jobName}</h4>
                            <p>
                                <ul className='job__tech'>
                                    <li>Html</li>
                                    <li>Css</li>         
                                </ul>
                            </p>
                        </div>
                        <div className='job__city'>
                            <p>{item.city}</p>
                            <p className='job__posted'>1 day ago</p>
                        </div>
                    </li>
                )
            })}
        </div>
    )
}

