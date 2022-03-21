import React from 'react'
import { useSelector ,RootStateOrAny} from 'react-redux'
import {Link} from "react-router-dom"

const JobComponent = () => {
  const jobs = useSelector((state:RootStateOrAny) => state.allJobs.jobs)
  const renderListJobs = jobs.map((job:any) =>{
    const {id, name, description, address, company, image, hot, status} = job;
      return (
        <section className="col-md-3" key={id}>
          <Link to={`/job/${id}`}>
            <div className="card">
              <input type="image" src={image} width="180px" height="180px" className="card-img-top" alt={image} />
              <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <h5 className="card-title">{description}</h5>
                <p className="card-text mb-4">{address}</p>
                <p className="card-text mb-4">{company}</p>
                <p className="card-text mb-4">{hot==1 ? "Hot" : ""}</p>
                <p className="card-text mb-4">{status==1?"Yes":"No"}</p>
                <a href="/#" className="btn btn-primary w-100">See more</a>
              </div>
            </div>
          </Link>
        </section>
        )
  })

  return (
    <>{renderListJobs}</>
  )
}
export default JobComponent