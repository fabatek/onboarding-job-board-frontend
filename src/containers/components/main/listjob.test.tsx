import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../../../redux/store";
import { Content } from "./listjob";

describe('Show list jobs', () => {
    it('should DOM render list jobs', () => {
      const { container } = render(<Provider store={store}><Content /></Provider>);
      expect(container).toBeInTheDocument();
    });
});