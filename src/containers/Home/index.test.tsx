import { render, screen } from "@testing-library/react";
import axios from "axios";
import Header from "../../components/Header/header";
import { JOBS_URL } from "../../redux/jobs/jobs-action";

describe("GET /job", () => {
  test("It responds with an array of jobs", async () => {
    const response = await axios.get(JOBS_URL);
    expect(response.status).toBe(200);
    expect(response.data.length).toBeGreaterThan(0);
    expect(response.data[0]).toHaveProperty("id");
    expect(response.data[0]).toHaveProperty("name");
  });
});
