import Job from '../../../model/job';
export default function ListJob(props:{currentJobs:Job[]}) {
    const {currentJobs} = props
    return (
        <div>
            {currentJobs?.map((item: Job, key: number) => {
                console.log(item.posted)
                return (
                    <li key={key} className={`list-group-item d-flex job`} data-testid="test100Jobs">
                        <img className='job__img' alt='logo' src={item.img} />
                        <div className='job__tittle'>
                            <h4>{item.jobName}</h4>
                            <ul className='job__tech'>
                                <li>Html</li>
                                <li>Css</li>
                                <a href="/#">Sign in to view</a>
                            </ul>
                        </div>
                        <div className='job__city'>
                            <p>{item.city}</p>
                            <p className='job__posted'>{item.posted.getHours}</p>
                        </div>
                    </li>
                )
            })}
        </div>
    )
}

