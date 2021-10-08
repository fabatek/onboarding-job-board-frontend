import * as React from "react";
import { useDispatch } from "react-redux";
import { searchTitleJob } from "../../../Redux/Action";

type Props = {
  resetCurrentPage: () => void;
};
const Index: React.FC<Props> = ({ resetCurrentPage }: Props) => {
  const dispatch = useDispatch(); //dispatch
  const onChange = (e: React.FormEvent<HTMLInputElement>) => {
    const { value } = e.currentTarget;
    dispatch(searchTitleJob(value)); //dispatch action searchTitleJob
    resetCurrentPage(); //reset page
  };
  return (
    <div className="input-group flex-nowrap header__search">
      <span className="input-group-text" id="addon-wrapping">
        Search
      </span>
      <input
        data-testid="input-search"
        type="text"
        className="form-control ml-2"
        placeholder="Title Job"
        aria-label="Username"
        aria-describedby="addon-wrapping"
        onChange={onChange}
      />
    </div>
  );
};
export default Index;
