import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../../redux/configStore";
import Detail from "./Detail";

test("test that elements have enough class", () => {
  const { getByTestId } = render(
    <Provider store={store}>
      <Detail />
    </Provider>
  );
  const checkClass: string[] = [
    "job-detail",
    "job-detail__content",
    "job-detail__img",
    "job-detail__description",
    "job-detail__btn--review",
    "job-detail__btn--follow",
  ];
  checkClass.forEach((item) => {
    expect(getByTestId(item)).toHaveClass(item);
  });
});
