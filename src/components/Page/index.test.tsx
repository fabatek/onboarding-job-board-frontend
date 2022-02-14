import { getByTitle, render } from "@testing-library/react"
import { Provider } from "react-redux"
import Page from "./index"
import store from "../../state/store"
 

describe("Page", () => {
    it("should render first job", async () => {
        const jobs=Array(50).fill(0).map((item,index)=>{ return {
            id: `${index}`,
            title: 'test',
            description: 'test',
            requirements: 'test',
            benefits: 'test',
            salary: 100,
            company: 'test',
            createAt: 'test'
        }});
        <Provider store={store}>
            <Page jobList={jobs}/>
        </Provider>;
      })
})
