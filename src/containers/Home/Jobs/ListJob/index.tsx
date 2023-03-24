import Job from '../../../model/job';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDollarSign, faCaretRight } from '@fortawesome/free-solid-svg-icons';
export default function ListJob(props:{currentJobs:Job[]}) {
    const {currentJobs} = props
    return (
        <div>
            {currentJobs?.map((item: Job, key: number) => {
                const hours = Math.floor(Math.random() * 60) + 1
                return (
                    <li key={key} className={`list-group-item d-flex job`} data-testid="test100Jobs">
                        <img className='job__img' alt='logo' src={item.img} />
                        <div className='job__tittle'>
                            <h4>{item.jobName}</h4>
                            <p className='job__tech'>
                                
                                <a href="/#"><FontAwesomeIcon className='job__icon' icon={faDollarSign}/> Sign in to view <FontAwesomeIcon icon={faCaretRight}/></a>
                                <button>Css</button>
                                <button>Html</button>
                                <button>Javascript</button>
                                <button>Fresher accept</button>
                            </p>
                        </div>
                        <div className='job__city'>
                            <p>{item.city}</p>
                            <p className='job__posted'>{hours}m</p>
                        </div>
                    </li>
                )
            })}
        </div>
    )
}

