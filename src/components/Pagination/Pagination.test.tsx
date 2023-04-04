import { fireEvent, render, waitFor } from "@testing-library/react";
import CustomProvider from "../../providers/CustomProvider";
import Pagination from "./Pagination";

describe("Pagination", () => {
  it("should be visible", async () => {
    const changeCurrentPage = jest.fn();
    render(
      <CustomProvider>
        <Pagination
          totalJobs={100}
          itemsPerPage={10}
          currentPage={1}
          handleChangeCurrentPage={changeCurrentPage}
        />
      </CustomProvider>
    );
    await waitFor(() => {
      const paginationListItem = document.querySelectorAll(".pagination__item");
      expect(paginationListItem).not.toBeNull();
    });
  });

  it("should render correct number of page", async () => {
    const changeCurrentPage = jest.fn();
    render(
      <CustomProvider>
        <Pagination
          totalJobs={100}
          itemsPerPage={10}
          currentPage={1}
          handleChangeCurrentPage={changeCurrentPage}
        />
      </CustomProvider>
    );
    await waitFor(() => {
      const paginationListItem = document.querySelectorAll(".pagination__item");
      expect(paginationListItem).toHaveLength(10);
    });
  });

  it("should render the prev and next button", async () => {
    const changeCurrentPage = jest.fn();
    render(
      <CustomProvider>
        <Pagination
          totalJobs={100}
          itemsPerPage={10}
          currentPage={2}
          handleChangeCurrentPage={changeCurrentPage}
        />
      </CustomProvider>
    );
    await waitFor(() => {
      const prevButton = document.querySelector(".pagination__prev-button");
      const nextButton = document.querySelector(".pagination__next-button");
      expect(prevButton).toBeVisible();
      expect(nextButton).toBeVisible();
    });
  });

  it("should render default page", async () => {
    const changeCurrentPage = jest.fn();
    render(
      <CustomProvider>
        <Pagination
          totalJobs={100}
          itemsPerPage={10}
          currentPage={1}
          handleChangeCurrentPage={changeCurrentPage}
        />
      </CustomProvider>
    );
    await waitFor(() => {
      const paginationItemActice = document.querySelector(
        ".pagination__item.active"
      );
      expect(paginationItemActice?.textContent).toEqual("1");
    });
  });

  it("should render only 1 page when the items per page is less than 10", async () => {
    const changeCurrentPage = jest.fn();
    const { queryByText } = render(
      <CustomProvider>
        <Pagination
          totalJobs={9}
          itemsPerPage={10}
          currentPage={1}
          handleChangeCurrentPage={changeCurrentPage}
        />
      </CustomProvider>
    );
    await waitFor(() => {
      const paginationItemActice = document.querySelector(
        ".pagination__item.active"
      );
      expect(paginationItemActice?.textContent).toEqual("1");
    });
    const prevButton = queryByText(/&laquo;/i);
    const nextButton = queryByText(/&raquo;/i);
    expect(prevButton).not.toBeInTheDocument();
    expect(nextButton).not.toBeInTheDocument();
  });
});
