import { JobModal } from "../../type/type"
import search from "./search"

const mockListJobs:JobModal[] = [
    {
        createdAt: "2022-12-06T13:06:50.782Z",
        title: "Principal Identity Officer",
        avatar: "https://loremflickr.com/640/480/food",
        address: "Livermore",
        tag: "Technician",
        status: true,
        jobDesc: "Totam necessiis mollitia facere repudiandae. Aspernatur itaque amet id sa",
        id:'1'
      },
      {
        createdAt: "2022-12-06T13:06:50.782Z",
        title: "International Paradigm Agent",
        avatar: "https://loremflickr.com/640/480/food",
        address: "Livermore",
        tag: "Technician",
        status: true,
        jobDesc: "Totam necessiis mollitia facere repudiandae. Aspernatur itaque amet id sa",
        id:'2'
      }
]
describe("Search", () => {
    test('search',() => {
        const result = search(mockListJobs,'Agent')
        expect(result).toHaveLength(1)
    })
})