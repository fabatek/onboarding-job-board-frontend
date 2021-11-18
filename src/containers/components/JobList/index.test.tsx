import {render} from "@testing-library/react";
import { Provider} from "react-redux";
import { BrowserRouter } from "react-router-dom";
import  JobList  from ".";
import { store } from "../../store";
describe('With React Testing Library', () => {
  it("should render JobContent", () => {
    const { container } = render(
    <Provider store={store}>
      <BrowserRouter>
        <JobList/>
      </BrowserRouter>
      </Provider>);
    expect(container).toBeInTheDocument();
  }); 
})
