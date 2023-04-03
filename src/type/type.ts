interface JobModal {
  address: string;
  avatar: string;
  createdAt: string;
  id: string;
  title: string;
  status?: boolean;
  jobDesc?: string;
  salary?: number;
  companyType?: string;
  working?: string;
  jobLevel?:string;
}
interface JobInitReducer {
  allJobs: JobModal[];
  loading: boolean;
  searchValue: SearchValue;
  filterValue: FilterValue;
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
interface SearchValue {
  valueCity?:string,
  searchInput?:string,
}
interface FilterValue {
  jobLevel?: string,
  salary?: string,
  workingModel?: string,
  companyType?: string,
}
export type { JobModal, JobInitReducer, JobTicketProps, PaginationProps, SearchValue, FilterValue };
