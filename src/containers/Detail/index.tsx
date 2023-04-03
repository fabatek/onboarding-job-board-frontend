import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope, faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons"
import "./style.scss"
import { RootState } from "../Redux/store/store"
import { useParams } from "react-router-dom"
import { getJobDetail } from "../Redux/jobDetail/jobDetailSlice"
import Loading from "../components/Loading"
export default function DetailJob() {
    const { data: job, loading } = useSelector((state: RootState) => state.jobDetail)
    const distpatch = useDispatch()
    const { id } = useParams()
    useEffect(() => {
        distpatch(getJobDetail(String(id)))
    }, [])
    return (
        <div className="text-center">
            {loading ? <Loading/> : <>
                <div className='py-4 detail'>
                    <div className="detail__content">
                        <div className="detail__content__title">
                            <h2 ><img className="detail__content__title__img" src={job?.img} alt="logo" /> {job?.jobName}</h2>
                            <h5 className="detail__content__title__tech"> ({job?.tech})</h5>
                            <button className="btn btn-danger">Apply Now</button>
                        </div>
                        <hr />
                        <div className="detail__content__desc">
                            <h4>Job Decscription</h4>
                            <p>{job?.decs}</p>
                        </div>
                        <hr />
                        <div className="detail__content__reason">
                            <ul>
                                <h4>Top 3 Reasons To Join Us</h4>
                                <li>Work remotely from wherever you want</li>
                                <li>13th month salary and performance bonus</li>
                                <li>Macbook Pro laptop provided after probation period</li>
                            </ul>
                        </div>
                        <hr />
                        <div className="detail__content__skill">
                            <ul>
                                <h4>Your Skills and Experience
                                    Basic Qualifications</h4>
                                <li>At least 2 years of proven experience as a Business Analyst</li>
                                <li>Master one mockup tool</li>
                                <li>Familiarity with both design and development agile methodologies</li>
                            </ul>
                        </div>
                        <hr />
                        <div className="detail__content__infor">
                            <ul>
                                <h4>Contact Information</h4>
                                <p><FontAwesomeIcon icon={faLocationDot} /> {job?.city}</p>
                                <p><FontAwesomeIcon icon={faPhone} /> 0123456789</p>
                                <p><FontAwesomeIcon icon={faEnvelope} /> abcde@gmail.com</p>
                            </ul>
                        </div>
                    </div>
                </div>
            </>}
        </div>
    )
}

