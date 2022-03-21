import { RootStateOrAny, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { animated, useSpring } from 'react-spring';

function RenderListMajors() {
    const majors = ["Tester", "Java", "PHP", "Android", ".NET", "iOS", "Business Analyst","QA QC"];
    return majors.map((major, index) =>
        <Link to="/" key={index} className="col-auto ms-xl-2 p-2 bg-white-hover text-white">{major}</Link>
    );
}
const JobSearch = () => {
    //Get Number Jobs From jobs state
    const jobs =  useSelector((state:RootStateOrAny) => state.allJobs.jobs)

    //Using useSpring => Animated Job number
    //totalJobs : jobs length & totalJobs: from Job number Start
    const totalJob = useSpring({ totalJobs: jobs.length, from: { totalJobs: 0  } });

    return (
        <section className="container-fluid p-3 mb-2 bg-dark text-white">
            <div className="container m-auto p-5 flex-column">
                <div className="px-5 pt-5 pb-3 text-white fs-2 text-wrap"> 
                    {/*Show the total number of jobs */}
                    {/* {jobs.length > 0 ? jobs.length : ""} IT Jobs For Chất Developers */}
                    <span className="d-flex">
                        <animated.div className="me-2">
                            {totalJob.totalJobs.to((val) => Math.floor(val))}
                        </animated.div>
                        IT Jobs For Chất Developers
                    </span>
                </div>
                <div className="p-5 text-white fs-3"> 
                    <div className="row g-3 form">
                        <div className="col-md-8">
                            <input type="text" className="form-control form-input" placeholder="Keyword skill (Java, IOS...), Job Title, Company..." aria-label="Search" aria-describedby="search-addon"/>
                        </div>
                        <div className="col-lg-2">
                            <select defaultValue={'DEFAULT'} className="form-select" aria-label="Default select example">
                            <option value="DEFAULT" disabled>All Cities</option>
                            <option value="1">Ho Chi Minh</option>
                            <option value="2">Ha Noi</option>
                            <option value="3">Da Nang</option>
                            </select>
                        </div>
                            <div className="col col-lg-2">
                            <button type="submit" className="btn btn-danger col w-100 fs-6 fw-500">Search</button>
                        </div>
                    </div>
                </div>
                <div className="px-5 text-white fs-14">
                    <ul className="row d-inline-flex">
                        {RenderListMajors()}
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default JobSearch