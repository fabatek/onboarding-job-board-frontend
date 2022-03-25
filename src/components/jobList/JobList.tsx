/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import { useSelector } from 'react-redux';
import { RootStore } from '../../store';
import './jobList.scss';

const JobList: React.FC = () => {
  const jobState = useSelector((state: RootStore) => state.job);

  return (
    <div className='d-flex flex-wrap'>
      {jobState.job?.map((i) => {
        return (
          <>
            <div key={i.id} className='card w-25 p-3 '>
              <img
                width='250px'
                className='card-img-top'
                src='data:image/jpeg;base64,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'
                alt='Card image cap'
              />
              <div className='card-body'>
                <h5 className='card-title'>{i.name}</h5>
                <p className='card-text'>{i.description}</p>
                <a href='#' className='btn btn-primary'>
                  View Detail
                </a>
              </div>
            </div>
          </>
        );
      })}
    </div>
  );
};

export default JobList;

// /* eslint-disable jsx-a11y/img-redundant-alt */
// import React, { ReactElement } from 'react';
// import { useSelector } from 'react-redux';
// import { RootStore } from '../../store';
// import { useState } from 'react';
// import ReactPaginate from 'react-paginate';
// import './jobList.scss';

// const JobList: React.FC = () => {
//   const jobState = useSelector((state: RootStore) => state.job);

//   //Set Page Number
//   const [pageNumber, setPageNumber]: any = useState([]);

//   //Default Page Number is 10
//   const jobPerPage = 10;

//   //Example PageNumber:2 JobPerPage:10 = 20  11->20
//   const pagesVisited = pageNumber * jobPerPage;
//   const jobLenght: any = jobState.job?.length;

//   //Page Count
//   const pageCount = Math.ceil(jobLenght / jobPerPage);
//   console.log('pageCount: ' + pageCount);

//   //Change Page 1 -> 2
//   const changePage = (data: any) => {
//     setPageNumber(data.selected);
//     console.log('setPageNumber: ' + setPageNumber(data.selected));
//   };
//   console.log('pageNumber: ' + pageNumber);

//   //RenderListJobs
//   // const RenderListJobs: ReactElement  = () => {
//   //   return jobState.job
//   //     ?.slice(pagesVisited, pagesVisited + jobPerPage)
//   //     .map((i) => {

//   //       return (
//   //         <>
//   //           <div className='card w-25 '>
//   //             <img
//   //               width='250px'
//   //               className='card-img-top'
//   //               src='data:image/jpeg;base64,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'
//   //               alt='Card image cap'
//   //             />
//   //             <div className='card-body'>
//   //               <h5 className='card-title'>{i.name}</h5>
//   //               <p className='card-text'>{i.description}</p>
//   //               <a href='#' className='btn btn-primary'>
//   //                 View Detail
//   //               </a>
//   //             </div>
//   //           </div>
//   //         </>
//   //       );
//   //     });
//   // };

//   return (
//     <>
//       <div className='job__list d-flex flex-wrap py-3 mx-5'>
//         {jobState.job
//           ?.slice(pagesVisited, pagesVisited + jobPerPage)
//           .map((i) => {
//             return (
//               <div className='card w-25 '>
//                 <img
//                   width='250px'
//                   className='card-img-top'
//                   src='data:image/jpeg;base64,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'
//                   alt='Card image cap'
//                 />
//                 <div className='card-body'>
//                   <h5 className='card-title'>{i.name}</h5>
//                   <p className='card-text'>{i.description}</p>
//                   <a href='#' className='btn btn-primary'>
//                     View Detail
//                   </a>
//                 </div>
//               </div>
//             );
//           })}
//       </div>

//       <ReactPaginate
//         previousLabel={'previous'}
//         nextLabel={'next'}
//         pageCount={pageCount}
//         onPageChange={changePage}
//         disabledClassName={'disable'}
//         containerClassName={'pagination justify-content-center'}
//         previousClassName={'page-item'}
//         previousLinkClassName={'page-link'}
//         pageClassName={'page-item'}
//         pageLinkClassName={'page-link'}
//         nextClassName={'page-item'}
//         nextLinkClassName={'page-link'}
//         activeClassName={'active'}
//       />
//     </>
//   );
// };

// export default JobList;