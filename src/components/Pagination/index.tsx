import React, { Fragment } from 'react';

interface PaginationProps {
    totalItem: number,
    itemsPerPage: number,
    currentPage: number,
    onClickPagination(pageNumber: number): any,
}

interface PageItemProps {
    pageNumber: number
}

const Pagination = (props: PaginationProps) => {
    const totalPages = parseInt((props.totalItem / props.itemsPerPage).toString());
    const currentPage = props.currentPage

    const PageItem = (itemProps: PageItemProps) => {
        let pageNumber = itemProps.pageNumber + 1;
        const pageActive = currentPage === pageNumber ? 'text-light bg-dark' : '';
        const disablePageActive = currentPage === pageNumber ? 'disabled' : '';
        
        return (
          <li className={`page-item m-0 pl-1 pr-1 ${ disablePageActive }`}>
            <span
            onClick={() => props.onClickPagination(pageNumber) }
             className={`page-a pl-2 pt-1 pr-2 pb-1 cursor-pointer border-0 fw-bold rounded ${ pageActive}`} >
              {pageNumber}
            </span>
          </li>);
      };

    const renderHtmlPageNumber = () => {
        const htmlPageNumber = [];

        if(totalPages <= 10) {
            for(let number = 0; number < totalPages; number++) {
                htmlPageNumber.push(<PageItem pageNumber={number} key={number} />);
            }

            return htmlPageNumber;
        }
        else {
            const begin = [1, 2, 3, 4, 5];
            const end = [totalPages, totalPages - 1, totalPages - 2];

            if(begin.includes(currentPage)) {
                for(let number = 0; number <= begin.length; number++) {
                    htmlPageNumber.push(<PageItem pageNumber={number} key={number} />);
                }

                return (
                    <Fragment>
                        { htmlPageNumber }
                        ...
                        <PageItem pageNumber={totalPages - 1} key={totalPages - 1} />
                    </Fragment>
                );
            }else if(end.includes(currentPage)) {
                for(let number = (totalPages - 1) - end.length; number < totalPages; number++) {
                    htmlPageNumber.push(<PageItem pageNumber={number} key={number} />);
                }

                return (
                    <Fragment>
                        <PageItem pageNumber={0} key={0} />
                        ...
                        { htmlPageNumber }
                    </Fragment>
                );
            } else {
                const between = [currentPage - 4, currentPage - 3, currentPage - 2, currentPage - 1, currentPage, currentPage + 1, currentPage + 2, currentPage + 3, currentPage + 4];

                for(let number = 0; number < between.length; number++) {
                    htmlPageNumber.push(<PageItem pageNumber={between[number] - 1} key={between[number] - 1} />);
                }

                return (
                    <Fragment>
                        <PageItem pageNumber={0} key={0} />
                        ...
                        { htmlPageNumber }
                        ...
                        <PageItem pageNumber={totalPages - 1} key={totalPages - 1} />
                    </Fragment>
                );
            }
            
        }

    }

    return (
        <div className="pagination mt-5">
            <nav aria-label="Page navigation" id="pagination" className="m-auto">
                <ul className="pagination align-items-center justify-content-center">
                {renderHtmlPageNumber()}
                </ul>
            </nav>
        </div>
    )
}

export default Pagination;