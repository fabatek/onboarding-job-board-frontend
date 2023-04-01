import { JobModal } from "../../type/type"
import search from "./search"

const mockListJobs:JobModal[] = [
  {
    createdAt: "2022-08-09T04:55:08.633Z",
    title: "Senior Creative Producer",
    avatar: "https://loremflickr.com/640/480/sports",
    address: "Hue",
    status: true,
    jobDesc: "Occaecati adipisci delectus earum suscipit veniam. Atque culpa nobis eos nemo nesciunt ab consequatur totam. Atque cupiditate illo repudiandae odit libero veritatis minus accusamus quam. Laborum dolores voluptates ratione reprehenderit.",
    salary: 2928,
    working: "Remote",
    companyType: "Outsource",
    jobLevel: "Junior",
    id: "1"
  },
      {
        createdAt: "2022-08-09T04:55:08.633Z",
        title: "Senior Creative Producer",
        avatar: "https://loremflickr.com/640/480/sports",
        address: "Hue",
        status: true,
        jobDesc: "Occaecati adipisci delectus earum suscipit veniam. Atque culpa nobis eos nemo nesciunt ab consequatur totam. Atque cupiditate illo repudiandae odit libero veritatis minus accusamus quam. Laborum dolores voluptates ratione reprehenderit.",
        salary: 2928,
        working: "Remote",
        companyType: "Outsource",
        jobLevel: "Junior",
        id: "1"
      }
]


const mockSearchValue = {
  valueCity:"Hue",
  searchInput:"",
}
const mockFilterValue = {
  jobLevel: "default",
  salary: "default",
  workingModel: "Remote",
  companyType: "default",
}
describe("Search", () => {
    test('search',() => {
        const result = search(mockListJobs,mockSearchValue,mockFilterValue)
        expect(result).toHaveLength(2)
    })
})