import { getByTitle, render } from "@testing-library/react"
import { Provider } from "react-redux"
import Page from "./index"
import store from "../../state/store"
 
const MockPage = () => {
    return (
        <Provider store={store}>
    
          </Provider>
    )
}
 
describe("Page", () => {
    it("should render first job", async () => {
        const { getByText, getByRole } = render(<MockPage />);
      
      })
})
