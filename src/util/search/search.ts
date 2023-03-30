import { JobModal } from "../../type/type";

const search = (jobs:JobModal[],searchValue: string):JobModal[] => {
const result = jobs?.filter((job:JobModal) => job.title.toLowerCase().includes(searchValue?.toLowerCase()));
return result
}

export default search