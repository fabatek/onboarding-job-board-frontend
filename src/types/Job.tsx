export default interface Job {
  id: number;
  url: string;
  title: string;
  company_name: string;
  category: string;
  tags: Array<any>[];
  job_type: string;
  publication_date: string;
  candidate_required_location: string;
  salary: string;
  description: string;
  company_logo_url: string;
}
