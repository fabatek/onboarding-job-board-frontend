import { useState } from 'react'
import ReactPaginate from 'react-paginate'
import { useSelector ,RootStateOrAny} from 'react-redux'
import {Link} from "react-router-dom"
// import "./jobcomponent.scss"

const JobComponent = () => {
  
  function statusJob(color:String, text:String) {
    return(
      <>
      <div className={`${color}`}>{text}</div>
      </>
    ) 
  }

  const jobs = useSelector((state:RootStateOrAny) => state.allJobs.jobs.slice(0,99))

  //Set Page Number
  const [pageNumber, setPageNumber]:any  = useState([])

  //Default Page Number is 10
  const jobPerPage = 10

  //Example PageNumber:2 JobPerPage:10 = 20  11->20
  const pagesVisited = pageNumber*jobPerPage
  
  //Page Count
  const pageCount = Math.ceil(jobs.length / jobPerPage)
  console.log("pageCount: " + pageCount)

  //Change Page 1 -> 2
  const changePage  = (data:any)=> {
    setPageNumber(data.selected)
    console.log("setPageNumber: " + setPageNumber(data.selected))
  }
  console.log("pageNumber: " + pageNumber)

  //RenderListJobs
  const renderListJobs = jobs.slice(pagesVisited, pagesVisited + jobPerPage).map((job:any) => {

    const {id, name, description, address, company, image, hot, status} = job;

    return (
      <section className="col-md-3" key={id}>
        <Link to={`job/${id}`} >
          <div className="card mb-4">
            <input type="image" src={image} className="card-img-top image-size" alt={image} />
            <div className="card-body">
              <h5 className="card-title text-lg-center fs-4 fw-bold text-primary">{company} - {id}</h5>
              <div className="card-text mb-4 text-dark">{name}</div>
              {/* <h5 className="card-title">{description}</h5> */}
              {/* <p className="card-text mb-4">{address}</p> */}
              <div className="card-text mb-4">{hot===1 ? statusJob("p-2 w-50 text-light fw-bold bg-danger rounded disable","Hot") : statusJob("p-2 w-50 text-light fw-bold bg-info rounded disable","Normal")}</div>
              <div className="card-text mb-4 text-black">{status===1?statusJob("text-success","Đang hoạt động"):statusJob("text-danger","Tạm ngưng tuyển")}</div>
              <Link to={`job/${id}`} className="btn btn-primary w-100">See more</Link>
            </div>
          </div>
        </Link>
      </section>
    )
  })

  //Reder List Jobs
  // const renderListJobs = jobs.map((job:any) =>{
  //   const {id, name, description, address, company, image, hot, status} = job;

  //     return (
  //       <section className="col-md-3" key={id}>
  //         <Link to={`job/${id}`} >
  //           <div className="card mb-4">
  //             <input type="image" src={image} width="170px" height="170px" className="card-img-top" alt={image} />
  //             <div className="card-body">
  //               <h5 className="card-title text-lg-center fs-4 fw-bold text-primary">{company}</h5>
  //               <p className="card-text mb-4 text-dark">{name}</p>
  //               {/* <h5 className="card-title">{description}</h5> */}
  //               {/* <p className="card-text mb-4">{address}</p> */}
  //               <p className="card-text mb-4">{hot==1 ? statusJob("p-2 w-50 text-light fw-bold bg-danger rounded disable","Hot") : ""}</p>
  //               <p className="card-text mb-4 text-black">{status==1?statusJob("text-success","Đang hoạt động"):statusJob("text-danger","Tạm ngưng tuyển")}</p>
  //               <Link to={`job/${id}`} className="btn btn-primary w-100">See more</Link>
  //             </div>
  //           </div>
  //         </Link>
  //       </section>
  //       )
  // })
  const headingJobNull = (
    <> 
      <h1 className="fs-5">Loading...</h1>
    </>
  )
  return (
    <>{(jobs.length > 0) 
    ? 
    <>
      {renderListJobs} 
      <ReactPaginate
        previousLabel={"previous"}
        nextLabel={"next"}
        pageCount={pageCount}
        onPageChange={changePage}
        disabledClassName={"disable"}
        containerClassName={"pagination justify-content-center"}
        previousClassName={"page-item"}
        previousLinkClassName={"page-link"}
        pageClassName={"page-item"}
        pageLinkClassName={"page-link"}
        nextClassName={"page-item"}
        nextLinkClassName={"page-link"}
        activeClassName={"active"}

        />
    </>
    : 
    headingJobNull}
        
    </>
  )
}
export default JobComponent