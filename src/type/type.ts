interface JobModal {
  address: string;
  avatar: string;
  createdAt: string;
  id: string;
  tag: string;
  title: string;
  status?: boolean;
  jobDesc?: string;
  salary?: number;
  companyType?: boolean;
  working?: boolean
}
interface JobInitReducer {
  allJobs: JobModal[];
  loading: boolean;
  searchResults: JobModal[];
}
interface JobTicketProps {
  item: JobModal;
}
interface PaginationProps {
  pageSize: number;
  setCurrentPage: (value:number) => void;
  currentPage: number;
  totalJobs?: number;
}

export type { JobModal, JobInitReducer, JobTicketProps, PaginationProps };
