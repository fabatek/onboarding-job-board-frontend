
import { render } from "@testing-library/react"
import { Provider } from "react-redux"
import Pagination from "."
import store from "../../state/store"


describe("Pagination", () => {
  it("should render enough page-item", async () => {
    const { findAllByTestId } = render(<Provider store={store}>
      <Pagination
        jobsPerPage={10}
        totalJob={100}
        paginate={jest.fn()}
        pageIsActive={1}
      />
    </Provider>);
    const pageItemElements = await findAllByTestId(/page-item/i);
    expect(pageItemElements.length).toBe(10);
  });
  it("should render correct number of page", () => {
    const { getByText } = render(<Provider store={store}>
      <Pagination
        jobsPerPage={10}
        totalJob={100}
        paginate={jest.fn()}
        pageIsActive={1}
      />
    </Provider>);
    const page1Element = getByText("1");
    const page2Element = getByText("2");
    const page3Element = getByText("3");
    const page4Element = getByText("4");
    const page5Element = getByText("5");
    const page6Element = getByText("6");
    const page7Element = getByText("7");
    const page8Element = getByText("8");
    const page9Element = getByText("9");
    const page10Element = getByText("10");
    expect(page1Element).toBeInTheDocument();
    expect(page2Element).toBeInTheDocument();
    expect(page3Element).toBeInTheDocument();
    expect(page4Element).toBeInTheDocument();
    expect(page5Element).toBeInTheDocument();
    expect(page6Element).toBeInTheDocument();
    expect(page7Element).toBeInTheDocument();
    expect(page8Element).toBeInTheDocument();
    expect(page9Element).toBeInTheDocument();
    expect(page10Element).toBeInTheDocument();
  })
})