import "./style.scss"
import ListJob from './ListJob';
export default function Jobs() {
    return (
        <div className='mt-5'>
            <ul className='container-fluid mb-2' id='listJobs'>
                <ListJob />
            </ul>
            <nav >
                <ul className='pagination'>
                </ul>
            </nav>
        </div>
    )
}

