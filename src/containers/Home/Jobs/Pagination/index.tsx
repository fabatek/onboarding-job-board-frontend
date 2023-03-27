export default function Pagination(props: { jobsPerPage: number, totalJobs: number, paginate: any, currentPage:number }) {
    const { jobsPerPage, totalJobs, paginate,currentPage } = props
    const pageNumber = []
    for (let i = 1; i <= Math.ceil(totalJobs / jobsPerPage); i++) {
        pageNumber.push(i)
    }
    return (
        <>
            {pageNumber.map((item,index) => {
                return (
                    <li className='page-item pagination__item' data-testid="pagination" key={index} >
                        <a onClick={() => {
                            paginate(item)                          
                        }} href="/#" className={`page-link pagination__item__link ${item==currentPage ? "pagination__item__active" : ""}`}>
                            {item}
                        </a>
                    </li>
                )
            })}
        </>
    )
}
