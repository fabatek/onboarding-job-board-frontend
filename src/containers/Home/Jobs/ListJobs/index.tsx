import Job from '../../../model/job';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDollarSign, faCaretRight } from '@fortawesome/free-solid-svg-icons';

export default function ListJobs(props: { currentJobs: Job[] }) {
    const { currentJobs } = props

    return (
        <ul className='container-fluid mb-2' id='listJobs'>
            {currentJobs.map((job: Job, key: number) => {
                const hours = Math.floor(Math.random() * 60) + 1
                const city = ['Ho Chi Minh', 'Ha Noi', 'Da Nang']
                const indexCity = Math.floor(Math.random() * 3)
                return (
                    <li key={key} className={`list-group-item d-flex job`} data-testid="test100Jobs">
                        <img className='job__img' alt='logo' src={job.img} />
                        <div className='job__tittle'>
                            <h4>{job.jobName}</h4>
                            <div className='job__tech'>
                                <a href="/#"><FontAwesomeIcon className='job__icon' icon={faDollarSign} /> Sign in to view <FontAwesomeIcon icon={faCaretRight} /></a>
                                <div>
                                    <button>Css</button>
                                    <button>Html</button>
                                    <button>Javascript</button>
                                    <button>Fresher accept</button>
                                </div>
                            </div>
                        </div>
                        <div className='job__city'>
                            <p>{job.city}</p>
                            <p className='job__posted'>{hours}m</p>
                        </div>
                    </li>
                )
            })}
        </ul>
    )
}

