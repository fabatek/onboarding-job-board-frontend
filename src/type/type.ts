interface JobModal {
  address: string;
  avatar: string;
  createdAt: string;
  id: string;
  tag: string;
  title: string;
  status?: boolean;
  jobDesc?: string;
}
interface JobInitReducer {
  allJobs: JobModal[];
  loading: boolean;
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
interface SearchJobModal {
  searchValue: string
}
export type { JobModal, JobInitReducer, JobTicketProps, PaginationProps, SearchJobModal };
