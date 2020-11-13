import { render, waitFor } from "@testing-library/react";
import App from "../App/App";
import React from "react";

test("renders number of jobs", async () => {
  const { getByTestId } = render(<App />);
  const jobElement = getByTestId("job-number");
  await waitFor(()=>
    expect(Number(jobElement.textContent)).toBeGreaterThan(0),{timeout:10000})   

});
