import { FilterValue, JobModal, SearchValue } from "../../type/type";

const search = (
  jobs: JobModal[],
  searchString: SearchValue,
  filters: FilterValue
): JobModal[] => {
  const result = jobs?.filter((job: JobModal) => {
    return (
      job.title
        .toLowerCase()
        .includes(String(searchString?.searchInput)?.toLowerCase()) &&
      (searchString.valueCity === "default"
        ? true
        : job.address === searchString.valueCity) &&
      (filters.workingModel === "default"
        ? true
        : job.working === filters.workingModel) &&
      (filters.companyType === "default"
        ? true
        : job.companyType === filters.companyType) &&
      (filters.jobLevel === "default"
        ? true
        : job.jobLevel === filters.jobLevel) &&
      (filters.salary === "default"
        ? true
        : Number(job.salary) < Number(filters.salary))
    );
  });
  return result;
};

export default search;
