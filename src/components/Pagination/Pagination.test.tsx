import { fireEvent, render, waitFor } from "@testing-library/react";
import CustomProvider from "../../providers/CustomProvider";
import Pagination from "./Pagination";

describe("Pagination", () => {
  it("should be visible", async () => {
    const changeCurrentPage = jest.fn();
    const { findAllByTestId } = render(
      <CustomProvider>
        <Pagination
          totalJobs={100}
          itemsPerPage={10}
          currentPage={1}
          handleChangeCurrentPage={changeCurrentPage}
        />
      </CustomProvider>
    );
    const paginationListItem = await findAllByTestId("pagination-item");
    expect(paginationListItem).not.toBeNull();
  });

  it("should render correct number of page", async () => {
    const changeCurrentPage = jest.fn();
    const { findAllByTestId, findByTestId } = render(
      <CustomProvider>
        <Pagination
          totalJobs={100}
          itemsPerPage={10}
          currentPage={1}
          handleChangeCurrentPage={changeCurrentPage}
        />
      </CustomProvider>
    );
    const paginationListItem = await findAllByTestId("pagination-item");
    const paginationItemActice = await findByTestId("pagination-item active");
    expect(paginationListItem).toHaveLength(9);
    expect(paginationItemActice).not.toBeNull();
  });

  it("should render the prev and next button", async () => {
    const changeCurrentPage = jest.fn();
    const { findByTestId } = render(
      <CustomProvider>
        <Pagination
          totalJobs={100}
          itemsPerPage={10}
          currentPage={2}
          handleChangeCurrentPage={changeCurrentPage}
        />
      </CustomProvider>
    );
    const prevButton = await findByTestId("prev-button");
    const nextButton = await findByTestId("next-button");
    expect(prevButton).toBeVisible();
    expect(nextButton).toBeVisible();
  });

  it("should render default page", async () => {
    const changeCurrentPage = jest.fn();
    const { findByTestId } = render(
      <CustomProvider>
        <Pagination
          totalJobs={100}
          itemsPerPage={10}
          currentPage={1}
          handleChangeCurrentPage={changeCurrentPage}
        />
      </CustomProvider>
    );
    const paginationItemActice = await findByTestId("pagination-item active");
    expect(paginationItemActice.textContent).toEqual("1");
  });

  it("should render only 1 page when the items per page is less than 10", async () => {
    const changeCurrentPage = jest.fn();
    const { findByTestId, queryByTestId } = render(
      <CustomProvider>
        <Pagination
          totalJobs={9}
          itemsPerPage={10}
          currentPage={1}
          handleChangeCurrentPage={changeCurrentPage}
        />
      </CustomProvider>
    );
    const paginationItemActice = await findByTestId("pagination-item active");
    expect(paginationItemActice.textContent).toEqual("1");
    const prevButton = queryByTestId("prev-button");
    const nextButton = queryByTestId("next-button");
    expect(prevButton).not.toBeInTheDocument();
    expect(nextButton).not.toBeInTheDocument();
  });
});
