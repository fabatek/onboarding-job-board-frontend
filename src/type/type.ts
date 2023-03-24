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
  totalPages: any;
  setCurentPage: React.Dispatch<React.SetStateAction<number>>;
  currentPage: number;
}
export type { JobModal, JobInitReducer, JobTicketProps, PaginationProps };
