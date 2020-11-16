import { render, waitFor } from "@testing-library/react";
import App from "../../containers/App/App";
import React from "react";

test("renders number of jobs", async () => {
    const { findAllByTestId } = render(<App />);
    const jobElement = await findAllByTestId("job-element", undefined, {
        timeout: 30000
      }).then(res=> expect(res.length).toEqual(100));
  
  });