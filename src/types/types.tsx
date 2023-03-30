export interface JobModel {
  id: number;
  jobTitle: string;
  image: string;
  salary: string;
  place: string;
  companyName: string;
  companyDescription?: string;
  category: string;
  jobDescription?: string;
  jobRequirement?: string;
}
