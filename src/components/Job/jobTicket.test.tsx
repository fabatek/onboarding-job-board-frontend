import React from "react";
import { render } from "@testing-library/react";
import JobTicket from "./JobTicket";
import { JobModal } from "../../type/type";

describe("JobTicket component", () => {
  const item:JobModal = {
    createdAt: "2023-03-15T22:08:58.057Z",
    title: "Global Factors Developer",
    avatar: "https://loremflickr.com/640/480/business",
    address: "Cerritos",
    tag: "Strategist",
    id: "1"
  };

  it("render the job title", () => {
    const { getByText } = render(<JobTicket item={item} />);
    const titleElement = getByText(/Global Factors Developer/i);
    expect(titleElement).toBeInTheDocument();
  });

  it("render the job avatar", () => {
    const { getByAltText } = render(<JobTicket item={item} />);
    const avatarElement = getByAltText(/234/i);
    expect(avatarElement).toBeInTheDocument();
  });

  it("render the job address", () => {
    const { getByText } = render(<JobTicket item={item} />);
    const addressElement = getByText(/Cerritos/i);
    expect(addressElement).toBeInTheDocument();
  });

  it("render the 'Hot' status", () => {
    const { getByText } = render(<JobTicket item={item} />);
    const statusElement = getByText(/Hot/i);
    expect(statusElement).toBeInTheDocument();
  });
});