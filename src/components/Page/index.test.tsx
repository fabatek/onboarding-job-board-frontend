import { render, screen } from "@testing-library/react"
import { Provider } from "react-redux"
import Page from "./index"
import store from "../../state/store"
 

describe("Page", () => {
    it("should render list jobs", async () => {
        const jobs=Array(100).fill(0).map((item,index)=>{ return {
            id: `${index}`,
            title: 'Manual tester',
            description: 'This is description',
            requirements: 'There are 3 requirements',
            benefits: 'There are many benefits',
            salary: 400,
            company: 'AB Company',
            createAt: '2010-12-15T18:28:46.170Z'
        }});
        const { getAllByRole } = render(<Provider store={store}>
            <Page
              jobList={jobs}
            />
        </Provider>);
         const pagination = screen.getAllByRole('testpage')
         expect(pagination).toHaveLength(10)
    })
})
