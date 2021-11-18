export interface PaginationProps {
    pageCount: number;
    currentPage?: number;
    maxPageItemCount?: number;
    ellipsis?: string;
    gotoPage?: (page: number) => void;
    url:string;
    keySearch?:string;
  }
  